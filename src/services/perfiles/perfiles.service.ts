import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../app/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PerfilesService {
    private readonly URL: string = `${environment.apiUrl}/perfil`;

    constructor(private readonly http: HttpClient) {}

    getPerfiles(): Observable<any> {
        return this.http.get(`${this.URL}/listar`);
    }
}
