import { Component, Input, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../cliente';
import { SelectItem } from "primeng/api";

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css'],
  providers: [MessageService]
})
export class ClienteFormComponent implements OnInit {
  clienteForm: FormGroup;
  @Input() clienteData: Cliente;
  @Input() newUser: boolean = true;
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
  constructor() { }

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
        value: this.cliente.ciudaID,
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
    if (
      this.itemsSelected &&
      this.cliente.ciudaID !== undefined  ) {
      let ciudad = this.optionsValuesCiudades.find((item) => item.id === +this.itemsSelected[0]);
      if (ciudad) {
        return ciudad.name;
      }
    }
    return "Seleccione";
  }
  
  getValuesForm() {
    const CLIENTE = new Cliente();
    CLIENTE.nombre = this.nombre.value;
    CLIENTE.telefono = this.telefono.value;
    console.log("seleccion", this.itemsSelected);
     if (this.itemsSelected !== null && this.itemsSelected.length > 0) {
      CLIENTE.ciudaID = parseInt(this.itemsSelected[0]);
    }
      return CLIENTE;
  }

  save(){
    const CLIENTE: Cliente = this.getValuesForm();
    console.log("los datos a guardar", CLIENTE);
  }
}
