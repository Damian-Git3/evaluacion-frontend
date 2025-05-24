import { Component, OnInit } from '@angular/core';
import { PerfilesService } from '../../../../services/perfiles/perfiles.service';
import { UsuariosService } from '../../../../services/usuarios/usuarios.service';

@Component({
    selector: 'app-modal-usuario',
    templateUrl: './modal-usuario.component.html',
    styleUrls: ['./modal-usuario.component.scss'],
    standalone: false
})
export class ModalUsuarioComponent implements OnInit {
    public visible: boolean = false;
    public nombre: string = '';
    public correo: string = '';
    public contrasenia: string = '';
    public estadoContrasenia: boolean = false;

    public perfiles: { idPerfil: number; nombrePerfil: string }[] = [];
    public perfilSelected: { idPerfil: number; nombrePerfil: string } = { idPerfil: 0, nombrePerfil: '' };

    constructor(
        public usuarioService: UsuariosService,
        public perfilesService: PerfilesService
    ) {}

    ngOnInit() {
        this.listarPerfiles();
    }

    showDialog() {
        // Logic to show the dialog
        this.visible = true;
    }

    guardar() {
        this.usuarioService.registrar(this.nombre, this.correo, this.contrasenia, this.perfilSelected.idPerfil).subscribe({
            next: (response) => {
                console.log('Usuario registrado:', response);
                this.visible = false; // Close the dialog
            }
        });
    }

    listarPerfiles() {
        this.perfilesService.getPerfiles().subscribe({
            next: (response) => {
                this.perfiles = response;
            },
            error: (error) => {
                console.error('Error al listar perfiles:', error);
            }
        });
    }

    validarContrasenia(event: any): boolean {
        const minLength = 8;
        const hasLetter = /[a-zA-Z]/.test(event);
        const hasNumber = /\d/.test(event);
        return event.length >= minLength && hasLetter && hasNumber;
    }
}
