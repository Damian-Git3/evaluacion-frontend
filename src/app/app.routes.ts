import { Routes } from '@angular/router';
import { InicioModule } from './components/inicio/inicio.module';
import { LoginModule } from './login/login.module';

export const routes: Routes = [
    {
        path: 'login',
        pathMatch: 'full',
        title: 'Login',
        loadChildren: () => LoginModule
    },
    {
        path: 'app',
        title: 'Inicio',
        loadChildren: () => InicioModule
    },

    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'login'
    }
];
