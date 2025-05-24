import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.routing';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    PasswordModule,
    DividerModule,
    ReactiveFormsModule,
    FormsModule,
    FloatLabelModule,
    InputTextModule,
    LoginRoutes,
  ],
  declarations: [LoginComponent],
})
export class LoginModule {}
