import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    component: BuscarPersonaComponent
  },
  {
    path:"actualizar-persona",
    component: ActualizarPersonaComponent
  },
  {
    path:"eliminar-persona",
    component: EliminarPersonaComponent
  },
  {
    path:"crear-producto",
    component: CrearProductoComponent
  },
  {
    path:"buscar-producto",
    component: BuscarProductoComponent
  },
  {
    path:"actualizar-producto",
    component: ActualizarProductoComponent
  },
  {
    path:"eliminar-producto",
    component: EliminarProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
