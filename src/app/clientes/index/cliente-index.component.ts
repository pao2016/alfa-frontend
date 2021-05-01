import { Component, OnInit } from '@angular/core';
import {Cliente} from '../cliente';
import {Message,MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cliente-index',
  templateUrl: './cliente-index.component.html',
  styleUrls: ['./cliente-index.component.css'],
  providers: [MessageService]
})
export class ClienteIndexComponent implements OnInit {
  clientes: Cliente[]=[];
  cols: any[];

  constructor(private router: Router,private messageService: MessageService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
  this.clientes.push({id: 1, nombre :'beto', telefono :31040, ciudaID :1});
  this.cols = [
    { field: 'nombre', header: 'Nombre' },
    { field: 'telefono', header: 'Telefono' }
];  
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

}
