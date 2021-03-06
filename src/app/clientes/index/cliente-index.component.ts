import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { Message, MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
import { ClientesService } from '../clientes.service';
@Component({
  selector: 'app-cliente-index',
  templateUrl: './cliente-index.component.html',
  styleUrls: ['./cliente-index.component.css'],
  providers: [MessageService]
})
export class ClienteIndexComponent implements OnInit {
  clientes: Cliente[] = [];
  cols: any[];

  constructor(private router: Router,
    private messageService: MessageService,
    private clientesService: ClientesService) { }

  ngOnInit(): void {

    this.cols = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'telefono', header: 'Telefono' }
    ];
    this.obtenerClientes();
  }


  redirect(route, id = false) {
    console.log("route", route);
    switch (route) {
      case 'create':
        return this.router.navigate(['/clientes/create']);
      case 'show':
        return this.router.navigate([`/clientes/show/${id}`]);
      case 'edit':
        return this.router.navigate([`/clientes/edit/${id}`]);
      default: {
        console.log('No correct route.');
      }
    }
  }


  obtenerClientes() {
    this.clientesService.obtenerClientes().then((resp: Cliente[]) => {
      console.log("respues", resp);
      this.clientes = resp;
    })

  }


  delete(item) {
    this.clientesService.eliminarCliente(item.id).then((resp: Cliente) => {
      if (resp && resp.id !== null) {
        this.messageService.add({ severity: 'success', summary: 'Información', detail: 'Cliente se registro correctameente' });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Información', detail: 'El cliente no fue eliminado' });
      }
    });
  }
}
