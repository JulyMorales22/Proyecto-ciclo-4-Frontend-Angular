import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPersona } from 'src/app/Modelos/persona.modelo';
import { ModeloProducto } from 'src/app/Modelos/producto.modelo';
import { ModeloUsuario } from 'src/app/Modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';


@Component({
  selector: 'app-actualizar-persona',
  templateUrl: './actualizar-persona.component.html',
  styleUrls: ['./actualizar-persona.component.css']
})
export class ActualizarPersonaComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombre': ["",[Validators.required]],
    'apellidos': ["",[Validators.required]],
    'telefono': ["",[Validators.required]],
    'correoElectronico': ["",[Validators.required]],
    'direccion': ["",[Validators.required]],
    'clave':["",[Validators.required]],
    'id':["",[Validators.required]]
  });


  id:string="";
  

  constructor(private fb:FormBuilder,
     private servicioUsuario:UsuarioService,
     private route: ActivatedRoute,
     private router:Router){}

 

  ngOnInit(): void {
    this.id= this.route.snapshot.params["id"];
    alert(this.id);
    this.BuscarUsuario();
  }

  ActualizarPersona(){
    
    let nombre = this.fgValidador.controls['nombre'].value;
    let apellidos = this.fgValidador.controls['apellidos'].value;
    let telefono = this.fgValidador.controls['telefono'].value;
    let correoElectronico = this.fgValidador.controls['correoElectronico'].value;
    let direccion = this.fgValidador.controls['direccion'].value;
    let clave = this.fgValidador.controls['clave'].value;
    let id = this.fgValidador.controls['id'].value;

    let p = new ModeloUsuario;

    p.nombre=nombre;
    p.apellidos = apellidos;
    p.telefono = telefono;
    p.correoElectronico = correoElectronico;
    p.direccion = direccion;
    p.clave = clave;
    p.id = id;

    this.servicioUsuario.ActualizarUsuario(p).subscribe((datos:ModeloUsuario)=>{
      alert("El usuario se Actualizo correctamente");
      this.router.navigate(["administracion/buscar-usuario"]);
    },(error:any)=>{
      alert("Error en la Actualizacion");
    }
    )
  }

  BuscarUsuario(){
    
    this.servicioUsuario.ConsultarUsuarioPorId(this.id).subscribe((datos:ModeloUsuario)=>{
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["apellidos"].setValue(datos.apellidos);
      this.fgValidador.controls["telefono"].setValue(datos.telefono);
      this.fgValidador.controls["correoElectronico"].setValue(datos.correoElectronico);
      this.fgValidador.controls["direccion"].setValue(datos.direccion);
      this.fgValidador.controls["clave"].setValue(datos.clave);
      this.fgValidador.controls["id"].setValue(datos.id);
    },(error:any)=>{
      alert ("El usuario no pudo ser actualizado");
    }
    )
  }

}