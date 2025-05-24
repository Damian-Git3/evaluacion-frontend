import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { Select } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { ModalUsuarioComponent } from './modal-usuario/modal-usuario.component';
import { UsuariosComponent } from './usuarios.component';
import { UsuariosRoutes } from './usuarios.routing';

@NgModule({
    imports: [
        CommonModule,
        UsuariosRoutes,
        ButtonModule,
        TableModule,
        AvatarModule,
        DialogModule,
        InputTextModule,
        FormsModule,
        ReactiveFormsModule,
        Select,
        PasswordModule
    ],
    declarations: [UsuariosComponent, ModalUsuarioComponent]
})
export class UsuariosModule {}
