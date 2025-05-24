import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from '../../app/interfaces/usuario.interface';
import { environment } from './../../app/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UsuariosService {
    private readonly URL: string = `${environment.apiUrl}/usuario`;

    constructor(private readonly http: HttpClient) {}

    login(correo: string, contrasenia: string): Observable<any> {
        return this.http.post(`${this.URL}/login`, {
            correo,
            contrasenia
        });
    }

    registrar(nombre: string, correo: string, contrasenia: string, idPerfil: number): Observable<any> {
        return this.http.post(`${this.URL}/registrar`, {
            nombre,
            correo,
            contrasenia,
            idPerfil
        });
    }

    listar(): Observable<IUsuario[]> {
        return this.http.get<IUsuario[]>(`${this.URL}/listar`);
    }
}
