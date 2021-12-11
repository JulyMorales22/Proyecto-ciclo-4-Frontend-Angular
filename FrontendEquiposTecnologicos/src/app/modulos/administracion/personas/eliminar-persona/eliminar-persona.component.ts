import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/Modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';


@Component({
  selector: 'app-eliminar-persona',
  templateUrl: './eliminar-persona.component.html',
  styleUrls: ['./eliminar-persona.component.css']
})
export class EliminarPersonaComponent implements OnInit {

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

  clave:string="";
  

  constructor(private fb:FormBuilder,
     private servicioUsuario:UsuarioService,
     private route: ActivatedRoute,
     private router:Router){}

 

  ngOnInit(): void {
    this.id= this.route.snapshot.params["id"];
    this.BuscarUsuario();
  }

  EliminarPersona(){
    
    this.servicioUsuario.EliminarPersona(this.id).subscribe((datos:ModeloUsuario)=>{
      this.router.navigate(["administracion/buscar-persona"]);
    },(error:any)=>{
      alert("Error en la Eliminacion");
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
      this.fgValidador.controls["id"].setValue(this.id);



    },(error:any)=>{
      alert ("El usuario no pudo ser eliminado");
    }
    )
  }

}