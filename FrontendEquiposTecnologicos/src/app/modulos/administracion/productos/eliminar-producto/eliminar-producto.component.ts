import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProducto } from 'src/app/Modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.css']
})
export class EliminarProductoComponent implements OnInit {

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
    private router:Router) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params["id"];
    alert(this.id);
    this.BuscarProducto();
  }

  EliminarProducto(){
 
    this.servicioProducto.EliminarProducto(this.id).subscribe((datos:ModeloProducto)=>{
      alert("El producto se Elimino correctamente");
      this.router.navigate(["administracion/buscar-producto"]);
    },(error:any)=>{
      alert("Error en la Eliminacion");
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
      alert ("El producto no pudo ser Eliminado");
    }
    )
  }
}
