import { Component, OnInit } from '@angular/core';
import {Message,MessageService} from 'primeng/api';
import {ClientesService} from '../clientes.service';
import { ActivatedRoute } from '@angular/router';
import {Cliente} from '../cliente';
@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css'],
  providers: [MessageService]
})
export class ClienteEditComponent implements OnInit {
  cliente: Cliente;
  constructor(private clientesService : ClientesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.clientesService.obtenerCliente(this.activatedRoute.snapshot.params.id).then((resp: Cliente)=>{
      this.cliente = resp;
      console.log("el ciente", this.cliente);
    });
  }

}
