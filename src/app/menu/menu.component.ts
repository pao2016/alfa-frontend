import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];
  constructor(private router: Router) { }

  ngOnInit(): void {

 
}
handleClick(a){
  console.log(a);
  this.router.navigate(['/clientes/index']);
}
}
