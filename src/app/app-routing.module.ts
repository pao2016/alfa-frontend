import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCreateComponent } from '../app/clientes/create/cliente-create.component';
import { ClienteEditComponent } from '../app/clientes/edit/cliente-edit.component';
import { ClienteShowComponent } from '../app/clientes/show/cliente-show.component';
import { ClientesComponent } from '../app/clientes/clientes.component';
import { ClienteIndexComponent } from '../app/clientes/index/cliente-index.component';
import { MenuComponent } from '../app/menu/menu.component';

const routes: Routes = [
  { path: 'inicio', component: MenuComponent },

  {
    path: 'clientes', component: ClientesComponent,
    children: [
      { path: 'index', component: ClienteIndexComponent },
      { path: 'create', component: ClienteCreateComponent },
      { path: 'edit/:id', component: ClienteEditComponent },
      { path: 'show/:id', component: ClienteShowComponent },

    ],
  },
  
  {
    path: '**',
    redirectTo: '/inicio',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
