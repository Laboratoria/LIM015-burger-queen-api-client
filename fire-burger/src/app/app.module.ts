import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './plantillas/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './vistas/login/login.component';
import { MenuComponent } from './vistas/menu/menu.component';
import { HistorialComponent } from './vistas/historial/historial.component';
import { OrdenesListasComponent } from './vistas/ordenes-listas/ordenes-listas.component';
import { OrdenesPendientesComponent } from './vistas/ordenes-pendientes/ordenes-pendientes.component';
import { ProductosComponent } from './vistas/productos/productos.component';
import { UsuariosComponent } from './vistas/usuarios/usuarios.component';
import { ActualizarProductoComponent } from './modales/actualizar-producto/actualizar-producto.component';
import { ActualizarUsuarioComponent } from './modales/actualizar-usuario/actualizar-usuario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaProductosComponent } from './vistas/menu/lista-productos/lista-productos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    MenuComponent,
    HistorialComponent,
    OrdenesListasComponent,
    OrdenesPendientesComponent,
    ProductosComponent,
    UsuariosComponent,
    ActualizarProductoComponent,
    ListaProductosComponent,
    ActualizarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ActualizarProductoComponent, ActualizarUsuarioComponent ]
  
})
export class AppModule { }
