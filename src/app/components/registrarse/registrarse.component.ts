import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {
  form:FormGroup
  loading=false;
  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar,private router:Router){
    this.form=this.fb.group({
      usuario:['', Validators.required],
      correo:['', Validators.required],
      password:['', Validators.required]
    })
  }
  ingresar(){
    console.log(this.form);
    const usuario=this.form.value.usuario;
    const password=this.form.value.password;
  
   if(usuario=='admin' && password=='admin123'){
  this.fakeloading();
   }else{
  this.error();
  this.form.reset();
   }
  }
  error(){
  
    this._snackBar.open('Usuario o Contraseña son invalidos', '', {
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }
  fakeloading(){
    this.loading=true;
  
    setTimeout(() => {
      this.router.navigate(['login'])
    }, 1500);
  }
  }
  