import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { InicioAppComponent } from './inicio/inicio.component';

const routes: Routes = [
    {
        path: '',
        component: InicioComponent,
        children: [
            {
                path: '',
                title: 'Inicio',
                component: InicioAppComponent
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
