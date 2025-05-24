import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ModalPedidosComponent } from './modal-pedidos/modal-pedidos.component';
import { PedidosComponent } from './pedidos.component';
import { PedidosRoutes } from './pedidos.routing';

@NgModule({
    imports: [CommonModule, PedidosRoutes, FormsModule, ReactiveFormsModule, TableModule, ButtonModule],
    declarations: [PedidosComponent, ModalPedidosComponent]
})
export class PedidosModule {}
