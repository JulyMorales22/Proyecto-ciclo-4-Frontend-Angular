import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { NuestraEmpresaComponent } from '../otros/nuestra-empresa/nuestra-empresa.component';
import { ActualizarPersonaComponent } from './personas/actualizar-persona/actualizar-persona.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { ActualizarProductoComponent } from './productos/actualizar-producto/actualizar-producto.component';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EliminarProductoComponent } from './productos/eliminar-producto/eliminar-producto.component';

const routes: Routes = [
  {
    path:"crear-persona", 
    component: CrearPersonaComponent
  },
  {
    path:"buscar-persona",
    component: BuscarPersonaComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path:"actualizar-persona/:id",
    component: ActualizarPersonaComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path:"eliminar-persona",
    component: EliminarPersonaComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path:"crear-producto",
    component: CrearProductoComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path:"buscar-producto",
    component: BuscarProductoComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path:"actualizar-producto/:id",
    component: ActualizarProductoComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path:"eliminar-producto/:id",
    component: EliminarProductoComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path:"nuestra-empresa",
    component: NuestraEmpresaComponent,
    canActivate : [ValidadorSesionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
