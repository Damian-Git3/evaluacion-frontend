import { Component, OnInit } from '@angular/core';
import { PerfilesService } from '../../../services/perfiles/perfiles.service';
import { UsuariosService } from '../../../services/usuarios/usuarios.service';
import { IUsuario } from '../../interfaces/usuario.interface';

@Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.scss'],
    standalone: false
})
export class UsuariosComponent implements OnInit {
    public usuarios: IUsuario[] = [];
    public lsPerfiles: { idPerfil: number; nombrePerfil: string }[] = [];

    constructor(
        private readonly usuariosService: UsuariosService,
        private readonly perfilesService: PerfilesService
    ) {}

    ngOnInit() {
        this.listarPerfiles();
        this.listarUsuarios();
    }

    listarUsuarios() {
        this.usuariosService.listar().subscribe({
            next: (response) => {
                console.log('Usuarios:', response);
                this.usuarios = response;
            },
            error: (error) => {
                console.error('Error al listar usuarios:', error);
            }
        });
    }

    listarPerfiles() {
        this.perfilesService.getPerfiles().subscribe({
            next: (response) => {
                console.log('Perfiles:', response);
                this.lsPerfiles = response;
            },
            error: (error) => {
                console.error('Error al listar perfiles:', error);
            }
        });
    }

    getEstatusLabel(activo: boolean): string {
        return activo ? 'Activo' : 'Inactivo';
    }

    getPerfilName(idPerfil: number): string {
        const perfil = this.lsPerfiles.find((p) => p.idPerfil === idPerfil);
        return perfil ? perfil.nombrePerfil : 'Desconocido';
    }
}
