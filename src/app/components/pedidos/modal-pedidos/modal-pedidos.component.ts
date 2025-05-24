import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-modal-pedidos',
    templateUrl: './modal-pedidos.component.html',
    styleUrls: ['./modal-pedidos.component.scss'],
    standalone: false
})
export class ModalPedidosComponent implements OnInit {
    public visible: boolean = false;
    constructor() {}

    ngOnInit() {}

    showDialog() {
        // Logic to show the dialog
        console.log('Dialog shown');
    }
}
