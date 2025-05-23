import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Login',
    component: LoginComponent,
  },
];

export const LoginRoutes = RouterModule.forChild(routes);
