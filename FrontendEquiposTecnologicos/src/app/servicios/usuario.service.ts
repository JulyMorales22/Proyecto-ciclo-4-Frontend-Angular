import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ModeloUsuario } from '../Modelos/usuario.modelo';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  ConsultarRegistros():Observable<ModeloUsuario[]>{
    return this.http.get<ModeloUsuario[]>("http://localhost:3000/usuarios");
  }

  CrearUsuario(usuario: ModeloUsuario):Observable<ModeloUsuario>{
    return  this.http.post<ModeloUsuario>("http://localhost:3000/usuarios",usuario);
  }

  EliminarUsuario(id:string):Observable <any>{
    return this.http.delete<ModeloUsuario>(`http://localhost:3000/usuarios/${id}`)
  }

  ActualizarUsuario(usuario: ModeloUsuario):Observable<ModeloUsuario>{
    return this.http.put<ModeloUsuario>(`http://localhost:3000/usuarios/${usuario.id}`,usuario);
  }
}
