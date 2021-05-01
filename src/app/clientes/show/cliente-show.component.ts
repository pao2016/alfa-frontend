import { Component, OnInit } from '@angular/core';
import {ClientesService} from '../clientes.service';
import { ActivatedRoute } from '@angular/router';
import {Cliente} from '../cliente';
@Component({
  selector: 'app-cliente-show',
  templateUrl: './cliente-show.component.html',
  styleUrls: ['./cliente-show.component.css']
})
export class ClienteShowComponent implements OnInit {
  cliente: Cliente;
  constructor( private clientesService : ClientesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   this.clientesService.obtenerCliente(this.activatedRoute.snapshot.params.id).then((resp: Cliente)=>{
     this.cliente = resp;
     console.log("el ciente", this.cliente);
   });;
  }

}
