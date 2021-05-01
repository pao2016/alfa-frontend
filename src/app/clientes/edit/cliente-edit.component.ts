import { Component, OnInit } from '@angular/core';
import {Message,MessageService} from 'primeng/api';
@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css'],
  providers: [MessageService]
})
export class ClienteEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
