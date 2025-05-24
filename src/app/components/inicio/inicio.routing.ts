import { RouterModule, Routes } from '@angular/router';
import { PedidosModule } from '../pedidos/pedidos.module';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { InicioComponent } from './inicio.component';
import { InicioAppComponent } from './inicio/inicio.component';

const routes: Routes = [
    {
        path: '',
        component: InicioComponent,
        children: [
            {
                path: 'inicio',
                title: 'Inicio',
                component: InicioAppComponent
            },
            {
                path: 'usuarios',
                title: 'Usuarios',
                loadChildren: () => UsuariosModule
            },
            {
                path: 'pedidos',
                title: 'Pedidos',
                loadChildren: () => PedidosModule
            },
            {
                path: '**',
                redirectTo: 'inicio',
                pathMatch: 'full'
            },
            {
                path: '',
                redirectTo: 'inicio',
                pathMatch: 'full'
            }
        ]
    }
];

export const InicioRoutes = RouterModule.forChild(routes);
