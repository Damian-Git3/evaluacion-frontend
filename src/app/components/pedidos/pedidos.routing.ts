import { RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from './pedidos.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        title: 'Pedidos',
        component: PedidosComponent
    }
];

export const PedidosRoutes = RouterModule.forChild(routes);
