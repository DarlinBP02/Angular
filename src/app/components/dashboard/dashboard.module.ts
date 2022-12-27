import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReportesComponent } from './reportes/reportes.component';
import { AcercadeComponent } from '../acercade/acercade.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { CalcularhoraComponent } from './calcularhora/calcularhora.component';
import { SueldoComponent } from './sueldo/sueldo.component';
import { ListregistroComponent } from './listregistro/listregistro.component';
import { CrearRegistroComponent } from './crear-registro/crear-registro.component';
import { RegistrarHorasComponent } from './registrar-horas/registrar-horas.component';



@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    UsuariosComponent,
    ReportesComponent,
    AcercadeComponent,
    CrearUsuarioComponent,
    CalcularhoraComponent,
    SueldoComponent,
    ListregistroComponent,
    CrearRegistroComponent,
    RegistrarHorasComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
