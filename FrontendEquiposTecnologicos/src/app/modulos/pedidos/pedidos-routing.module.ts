import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealizarPedidosComponent } from './realizar-pedidos/realizar-pedidos.component';

const routes: Routes = [
  {
    path:"realizar-pedidos", 
    component: RealizarPedidosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
