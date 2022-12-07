import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {
  facultad: any[] = ['Tecnologia de la Informacion','Ingenieria en Sistema'];
  form:FormGroup;

  constructor(private fb:FormBuilder, private _usuarioService:UsuarioService, private router:Router
    ,private _snackBar: MatSnackBar){
    this.form=this.fb.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      telefono:['',Validators.required],
      correo:['',Validators.required],
      facultad:['',Validators.required],
    })
  }
  agregarUsuario(){

    const user:Usuario={
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      telefono: this.form.value.telefono,
      correo: this.form.value.correo,
      facultad: this.form.value.facultad
    }

    this._usuarioService.agregarUsuario(user);
    this.router.navigate(['/dashboard/usuarios'])

    this._snackBar.open('Usuario fue agregado con exito', '', {
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }
}
