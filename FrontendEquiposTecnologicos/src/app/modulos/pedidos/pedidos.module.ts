import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { RealizarPedidosComponent } from './realizar-pedidos/realizar-pedidos.component';


@NgModule({
  declarations: [
    RealizarPedidosComponent
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule
  ]
})
export class PedidosModule { }
