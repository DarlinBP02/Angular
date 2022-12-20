import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from '../acercade/acercade.component';
import { CalcularhoraComponent } from './calcularhora/calcularhora.component';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReportesComponent } from './reportes/reportes.component';
import { SueldoComponent } from './sueldo/sueldo.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const routes: Routes = [
  {path:'',component:DashboardComponent, children:[
    {path:'',component:InicioComponent},
    {path:'usuarios',component:UsuariosComponent},
    {path:'reportes',component:ReportesComponent},
    {path:'acercade',component:AcercadeComponent},
    {path:'crear-usuario',component:CrearUsuarioComponent},
    {path:'calcularhora',component:CalcularhoraComponent},
    {path:'sueldo',component:SueldoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
