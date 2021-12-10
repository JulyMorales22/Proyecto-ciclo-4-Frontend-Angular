import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProducto } from 'src/app/Modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';


@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'tipo': ["",[Validators.required]],
    'descripcion': ["",[Validators.required]],
    'valor': ["",[Validators.required]],
    'cantidad': ["",[Validators.required]],
    'imagen': ["",[Validators.required]],
    'id':["",[Validators.required]]
  });


  id:string="";
  

  constructor(private fb:FormBuilder,
     private servicioProducto:ProductoService,
     private route: ActivatedRoute,
     private router:Router){}

 

  ngOnInit(): void {
    this.id= this.route.snapshot.params["id"];
    this.BuscarProducto();
  }

  ActualizarProducto(){
    
    let tipo = this.fgValidador.controls['tipo'].value;
    let descripcion = this.fgValidador.controls['descripcion'].value;
    let valor = parseInt(this.fgValidador.controls['valor'].value);
    let cantidad = parseInt (this.fgValidador.controls['cantidad'].value);
    let imagen = this.fgValidador.controls['imagen'].value;
    
    let p = new ModeloProducto();
    p.tipo=tipo;
    p.descripcion =descripcion;
    p.valor = valor;
    p.cantidad = cantidad;
    p.imagen = imagen;
    p.id = this.id;

    this.servicioProducto.ActualizarProducto(p).subscribe((datos:ModeloProducto)=>{
      alert("El producto se Actualizo correctamente");
      this.router.navigate(["administracion/buscar-producto"]);
    },(error:any)=>{
      alert("Error en la Actualizacion");
    }
    )
  }

  BuscarProducto(){
    this.servicioProducto.ConsultaProductoPorId(this.id).subscribe((datos:ModeloProducto)=>{
      this.fgValidador.controls["tipo"].setValue(datos.tipo);
      this.fgValidador.controls["descripcion"].setValue(datos.descripcion);
      this.fgValidador.controls["valor"].setValue(datos.valor);
      this.fgValidador.controls["cantidad"].setValue(datos.cantidad);
      this.fgValidador.controls["imagen"].setValue(datos.imagen);
      this.fgValidador.controls["id"].setValue(datos.id);
    },(error:any)=>{
      alert ("El producto no pudo ser actualizado");
    }
    )
  }

}
