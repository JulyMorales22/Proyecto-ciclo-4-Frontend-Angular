import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/Modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {
  fgValidador : FormGroup = this.fb.group({
    'nombre': ["",[Validators.required]],
    'apellidos': ["",[Validators.required]],
    'telefono': ["",[Validators.required]],
    'correoElectronico': ["",[Validators.required]],
    'direccion': ["",[Validators.required]]
  });

  constructor(private fb:FormBuilder,
    private servicioUsuario:UsuarioService,
    private router:Router) { }
  ngOnInit(): void {
    

  }
  GuardarPersona(){
    let nombre = this.fgValidador.controls['nombre'].value;
    let apellidos = this.fgValidador.controls['apellidos'].value;
    let telefono = this.fgValidador.controls['telefono'].value;
    let correoElectronico = this.fgValidador.controls['correoElectronico'].value;
    let direccion = this.fgValidador.controls['direccion'].value;
  
    let p = new ModeloUsuario();
    p.nombre=nombre;
    p.apellidos =apellidos;
    p.telefono = telefono;
    p.correoElectronico = correoElectronico;
    p.direccion = direccion;
    p.user=correoElectronico;

    this.servicioUsuario.CrearUsuario(p).subscribe((datos:ModeloUsuario)=>{
      alert("la persona fue creada correctamente!!");
      this.router.navigate(["administracion/buscar-persona"]);
    },(error:any)=>{
      alert("Error en el alamcenamiento de la persona!!")
    }
    )
  
  }

}
