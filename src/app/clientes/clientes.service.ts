import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cliente } from '../clientes/cliente';
import { map } from 'rxjs/operators';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient,) { }

  obtenerClientes() {
    return new Promise((resolve, reject) => {
      this.http.get(`${base_url}/clientes`).subscribe(response =>{
        resolve(response), error => {
          reject(error);
        }
      });
    
    });

  }


  crearCliente(cliente: Cliente) {
    let params = {
      nombre: cliente.nombre,
      telefono: cliente.telefono,
      ciudad_id: cliente.ciudad_id,
    }
    return new Promise((resolve, reject) => {
      this.http.post(`${base_url}/clientes`, params).subscribe(response => {
        resolve(response), error => {
          reject(error);
        }
      });

    });
  }

  obtenerCliente(id: any) {
    return new Promise((resolve, reject) => {
      this.http.get(`${base_url}/clientes/${id}`).subscribe(respose => {
        resolve(respose), error => {
          reject(error);
        }
      });
    });


  }

  actualizarCliente(cliente: Cliente): any {
    let params = {
      id: cliente.id,
      nombre: cliente.nombre,
      telefono: cliente.telefono,
      ciudad_id: cliente.ciudad_id,
    }
    return this.http.post(`${base_url}/clientes`, params);
  }


}
