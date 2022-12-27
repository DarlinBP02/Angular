import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-crear-registro',
  templateUrl: './crear-registro.component.html',
  styleUrls: ['./crear-registro.component.css']
})
export class CrearRegistroComponent implements OnInit {
  crearregistro: FormGroup;
  submitted = false;
  loading = false;


  
  constructor(private fb: FormBuilder, private _registro: RegistroService,private router: Router,private toastr: ToastrService) {
    this.crearregistro = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      documento: ['', Validators.required],
      salario: ['', Validators.required]
    })
}  

ngOnInit(): void {
  }

  agregarregistro() {
    this.submitted = true;

    if (this.crearregistro.invalid) {
      return;
    }
    const horasextras: any = {
      nombre: this.crearregistro.value.nombre,
      apellido: this.crearregistro.value.apellido,
      documento: this.crearregistro.value.documento,
      salario: this.crearregistro.value.salario,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }
    this.loading = true;
    this._registro.agregarregistro(horasextras).then(() => {
      this.toastr.success('La hora extra fue registrado con exito!', 'Hora Extra Registrads',{
        positionClass: 'toast-bottom-right'
      });
      this.loading = false;
        this.router.navigate(['dashboard/listregistro']);
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
    }
    

    
}
