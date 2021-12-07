import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { SeguridadModule } from '../seguridad.module';
import * as cryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  estaIdentificado:Boolean=false;

  fgValidador : FormGroup = this.fb.group({
  'usuario' : ['',[Validators.required, Validators.email]],
  'clave' : ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder, 
      private servicioSeguridad: SeguridadService,
      private router: Router
    ) { }

  ngOnInit(): void {
  }

  IdentificarUsuario(){
    let usuario = this.fgValidador.controls['usuario'].value;
    let clave = this.fgValidador.controls['clave'].value;
    let clavecifrada= cryptoJS.MD5(clave).toString();

    this.servicioSeguridad.Identificar(usuario,clavecifrada).subscribe((datos:any)=>{
      //ok
      alert("datos correctos")
      this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(["/inicio"]);
    }, (error:any)=>{
      //ok
      alert("datos invalidos")
    })
  }

}
