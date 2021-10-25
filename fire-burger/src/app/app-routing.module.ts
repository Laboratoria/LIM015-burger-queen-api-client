import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { HistorialComponent } from './vistas/historial/historial.component';
import { MenuComponent } from './vistas/menu/menu.component';
import { OrdenesListasComponent } from './vistas/ordenes-listas/ordenes-listas.component';
import { OrdenesPendientesComponent } from './vistas/ordenes-pendientes/ordenes-pendientes.component';
import { ProductosComponent } from './vistas/productos/productos.component';
import { UsuariosComponent } from './vistas/usuarios/usuarios.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'historial', component: HistorialComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'ordenes-listas', component: OrdenesListasComponent },
  { path: 'ordenes-pendientes', component: OrdenesPendientesComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'usuarios', component: UsuariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent,
  HistorialComponent,
  MenuComponent,
  OrdenesListasComponent, 
  OrdenesPendientesComponent, 
  ProductosComponent, 
  UsuariosComponent]
