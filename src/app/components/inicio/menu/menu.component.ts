import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    standalone: false
})
export class MenuComponent implements OnInit {
    items: MenuItem[] | undefined;
    public nombre: string | null = null;
    public perfil: string | null = null;

    ngOnInit() {
        this.getUsuario();
        this.items = [
            {
                label: 'Inicio',
                icon: 'fa-solid fa-house',
                routerLink: 'inicio'
            },
            {
                label: 'Usuarios',
                icon: 'fa-solid fa-users',
                routerLink: 'usuarios'
            },
            {
                label: 'Pedidos',
                icon: 'fa-solid fa-boxes-stacked',
                routerLink: 'pedidos'
            }
        ];
    }

    getUsuario() {
        let usuario = localStorage.getItem('usuario');
        console.log(usuario);
        if (usuario) {
            let usuarioJson = JSON.parse(usuario);
            console.log(usuarioJson);
            this.nombre = usuarioJson.nombre;
            this.perfil = usuarioJson.perfil.nombrePerfil;
        }
    }
}
