import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../../services/usuarios/usuarios.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: false
})
export class LoginComponent implements OnInit {
    public user: string = '';
    public password: string = '';

    constructor(
        private readonly usuarioService: UsuariosService,
        private readonly router: Router
    ) {}

    ngOnInit() {}

    login() {
        this.usuarioService.login(this.user, this.password).subscribe({
            next: (response) => {
                console.log('Login successful:', response);
                localStorage.setItem('usuario', JSON.stringify(response.usuario));
                localStorage.setItem('token', response.token);

                if (response.token) {
                    this.router.navigate(['/app']);
                }
            },
            error: (error) => {
                console.error('Login failed:', error);
            }
        });
    }
}
