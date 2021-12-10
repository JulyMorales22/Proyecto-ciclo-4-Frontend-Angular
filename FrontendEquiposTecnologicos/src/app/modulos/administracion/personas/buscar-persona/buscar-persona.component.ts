import { Component, OnInit } from '@angular/core';
import { ModeloUsuario } from 'src/app/Modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-buscar-persona',
  templateUrl: './buscar-persona.component.html',
  styleUrls: ['./buscar-persona.component.css']
})
export class BuscarPersonaComponent implements OnInit {
  ListaUsuarios:ModeloUsuario[]=[];

  constructor(private servicioUsuario: UsuarioService) { }

  ngOnInit(): void {
    this.ObtenerListadoUsuarios();
  }

  ObtenerListadoUsuarios(){
    this.servicioUsuario.ConsultarRegistros().subscribe((datos:ModeloUsuario[])=>{
      this.ListaUsuarios=datos;
    }
    )
  }

}
