import { Component, OnInit } from '@angular/core';
import {Message,MessageService} from 'primeng/api';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [MessageService]
})
export class ClientesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
