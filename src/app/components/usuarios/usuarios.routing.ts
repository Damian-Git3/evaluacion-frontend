import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        title: 'Usuarios',
        component: UsuariosComponent
    }
];

export const UsuariosRoutes = RouterModule.forChild(routes);
