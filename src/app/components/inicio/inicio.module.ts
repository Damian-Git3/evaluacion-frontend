import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { Ripple } from 'primeng/ripple';
import { MenuComponent } from '../menu/menu.component';
import { InicioComponent } from './inicio.component';
import { InicioRoutes } from './inicio.routing';
import { InicioAppComponent } from './inicio/inicio.component';

@NgModule({
    imports: [CommonModule, InicioRoutes, MenubarModule, BadgeModule, Ripple, AvatarModule, InputTextModule, CardModule],
    declarations: [InicioComponent, MenuComponent, InicioAppComponent]
})
export class InicioModule {}
