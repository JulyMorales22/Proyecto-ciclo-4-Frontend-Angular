import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloIdentificar } from 'src/app/Modelos/identificar.modelo';
import { ModeloProducto } from 'src/app/Modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  fgValidador : FormGroup = this.fb.group({
    'tipo': ["",[Validators.required]],
    'descripcion': ["",[Validators.required]],
    'valor': ["",[Validators.required]],
    'cantidad': ["",[Validators.required]],
    'imagen': ["",[Validators.required]]
  });

  constructor(private fb:FormBuilder,
    private servicioProducto:ProductoService,
    private router:Router) { }
    
  ngOnInit(): void {
  }

  GuardarProducto(){
    let tipo = this.fgValidador.controls['tipo'].value;
    let descripcion = this.fgValidador.controls['descripcion'].value;
    let valor = parseInt(this.fgValidador.controls['valor'].value);
    let cantidad = parseInt(this.fgValidador.controls['cantidad'].value);
    let imagen = this.fgValidador.controls['imagen'].value;
  
    let p = new ModeloProducto();
    p.tipo=tipo;
    p.descripcion =descripcion;
    p.valor = valor;
    p.cantidad = cantidad;
    p.imagen = imagen;

    this.servicioProducto.CrearProducto(p).subscribe((datos:ModeloProducto)=>{
      alert("El producto fue creado correctamente!!");
      this.router.navigate(["administracion/buscar-producto"]);
    },(error:any)=>{
      alert("Error en el alamcenamiento del producto!!")
    }
    )
  
  }




}
