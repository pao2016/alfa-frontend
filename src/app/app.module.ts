import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteCreateComponent } from '../app/clientes/create/cliente-create.component';
import { ClienteEditComponent } from '../app/clientes/edit/cliente-edit.component';
import { ClienteFormComponent } from '../app/clientes/form/cliente-form.component';
import { ClienteShowComponent } from '../app/clientes/show/cliente-show.component';
import { MenuComponent } from './menu/menu.component';
import { ClienteIndexComponent } from '../app/clientes/index/cliente-index.component';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {MultiSelectModule} from 'primeng/multiselect';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { InterceptorsService } from './interceptors/interceptors.service';
@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ClienteCreateComponent,
    ClienteEditComponent,
    ClienteFormComponent,
    ClienteShowComponent,
    MenuComponent,
    ClienteIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    RouterModule,
    TableModule,
    FormsModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    MultiSelectModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : InterceptorsService,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
