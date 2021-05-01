import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css'],
  providers: [MessageService]
})
export class ClienteCreateComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
  }
  back() {

  }
}
