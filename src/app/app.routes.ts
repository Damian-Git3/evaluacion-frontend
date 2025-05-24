import { Routes } from '@angular/router';
import { InicioModule } from './components/inicio/inicio.module';
import { LoginModule } from './components/login/login.module';
import { tokenGuard } from './shared/token.guard';

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
        canActivate: [tokenGuard],
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
