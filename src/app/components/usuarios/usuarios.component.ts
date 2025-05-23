import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.scss'],
    standalone: false
})
export class UsuariosComponent implements OnInit {
    first = 0;

    rows = 10;

    constructor() {}

    ngOnInit() {}

    next() {
        this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }

    reset() {
        this.first = 0;
    }
}
