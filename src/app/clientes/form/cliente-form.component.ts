import { Component, Input, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../cliente';
import { SelectItem } from "primeng/api";
import { ClientesService } from '../clientes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css'],
  providers: [MessageService]
})
export class ClienteFormComponent implements OnInit {
  clienteForm: FormGroup;
  @Input() clienteData: Cliente;
  @Input() newCliente: boolean = true;
  @Input() viewMode: boolean = false;
  cliente: Cliente = new Cliente();
  clienteRegistered: Cliente;
  itemsSelected: string[] = [];
  items: SelectItem[] = [];

  optionsValuesCiudades = [
    { id: 1, name: "Cali", label: "Cali" },
    { id: 2, name: "Popayan", label: "Popayan" },
    { id: 3, name: "Bogota", label: "Bogota" },
    { id: 4, name: "Pasto", label: "Pasto" },
  ];
  constructor(private clientesService: ClientesService,
    private messageService: MessageService,
    private router: Router) { }

  get nombre() {
    return this.clienteForm.get('nombre');
  }

  get telefono() {
    return this.clienteForm.get('telefono');
  }

  get ciudad_id() {
    return this.clienteForm.get('ciudad_id');
  }

  ngOnInit(): void {
    this.configOptionsCiudades();
    this.cliente = this.clienteData ? this.clienteData : new Cliente();
    this.clienteRegistered = this.cliente;

    this.clienteForm = new FormGroup({
      nombre: new FormControl(this.cliente.nombre, [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('^[A-Za-z-ñÑáéíóúÁÉÍÓÚ ]+$'),

      ]),
      telefono: new FormControl(this.cliente.telefono, [
        Validators.required,
        Validators.minLength(4),

      ]),

      ciudad_id: new FormControl({
        value: this.cliente.ciudad_id,
        disabled: this.viewMode,
      }),

    });

  }

  configOptionsCiudades() {
    this.optionsValuesCiudades.forEach((option) => {
      this.items.push({ label: option.label, value: option.id });
    });

  }

  getdefaultLabel() {
    let name: string = "Seleccione";
    if (this.cliente.ciudad_id !== undefined) {
      let ciudad = this.optionsValuesCiudades.find((item) => item.id === +this.cliente.ciudad_id);
      if (ciudad) {
        name = ciudad.label.toString();
      }
    }
    return name;
  }

  getValuesForm() {
    const CLIENTE = new Cliente();
    CLIENTE.nombre = this.nombre.value;
    CLIENTE.telefono = this.telefono.value;
    if (this.itemsSelected !== null && this.itemsSelected.length > 0) {
      CLIENTE.ciudad_id = parseInt(this.itemsSelected[0]);
    }
    return CLIENTE;
  }

  save() {
    const CLIENTE: Cliente = this.getValuesForm();
    if (this.newCliente) {
      this.clientesService.crearCliente(CLIENTE).then((resp: Cliente) => {
        if (resp && resp.id !== undefined && resp.id !== null) {
          this.messageService.add({ severity: 'success', summary: 'Información', detail: 'Cliente se registro correctameente' });
          setTimeout(() => {
            this.router.navigate(['/clientes/index']);
          }, 1000);
        }
      });
    } else {
      
      if (this.itemsSelected.length > 0) {
        CLIENTE.ciudad_id = +this.itemsSelected[0];
      } else {
        CLIENTE.ciudad_id = this.clienteRegistered.ciudad_id;
      }

      this.clientesService.actualizarCliente( this.cliente.id, CLIENTE).then((resp: Cliente) => {
        if (resp && resp.id !== undefined && resp.id !== null) {
          this.messageService.add({ severity: 'success', summary: 'Información', detail: 'Cliente se actualizo correctameente' });
          setTimeout(() => {
            this.router.navigate(['/clientes/index']);
          }, 1000);
        } else {
          this.messageService.add({ severity: 'error', summary: 'Información', detail: 'Revise los campos, No se actualizo ' });
          setTimeout(() => {
            this.router.navigate(['/clientes/index']);
          }, 1000);
        }

      });
    }
  }
}
