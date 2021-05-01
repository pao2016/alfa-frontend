import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Cliente} from '../clientes/cliente';
import { map } from 'rxjs/operators';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }
   
  obtenerClientes(): any {
    console.log("la url en base del servicio", base_url);
    return this.http.get(`${base_url}/clientes`).pipe(map(res => res));
  }

}
