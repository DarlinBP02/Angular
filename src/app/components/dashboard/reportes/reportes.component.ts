import { Component } from '@angular/core';
import registroData from 'src/assets/json/registro.json';

interface Registro{
  Nombre:String;
  Apellido:String;
  Correo:String;
  Telefono:string;
  horastrabajadas:string;
  facultad:string;
}

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent {
  registro:Registro[]=registroData;

}
