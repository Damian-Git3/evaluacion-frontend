import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { UsuariosComponent } from './usuarios.component';
import { UsuariosRoutes } from './usuarios.routing';

@NgModule({
    imports: [CommonModule, UsuariosRoutes, ButtonModule, TableModule, AvatarModule],
    declarations: [UsuariosComponent]
})
export class UsuariosModule {}
