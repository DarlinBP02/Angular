import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuario: Usuario[] = [
    {nombre: 'Marco', apellido: 'Perez', telefono:'099452134', correo: 'marco@gmail.com',facultad:'T.I'},
    {nombre: 'Luis', apellido: 'Castro', telefono:'094856231', correo: 'luis@gmail.com',facultad:'T.I'},
    {nombre: 'Maria', apellido: 'Barcia', telefono:'098552241', correo: 'maria@gmail.com',facultad:'T.I'}
    
  ];
  
  constructor() { }

  getUsuario(){
    return this.listUsuario.slice();
  }
  eliminarUsuario(index:number){
    this.listUsuario.splice(index,1);
  }
  agregarUsuario(usuario:Usuario){
    this.listUsuario.unshift(usuario);
  }
}
