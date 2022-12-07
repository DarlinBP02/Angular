import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listUsuario:Usuario[]=[];
  displayedColumns: string[] = ['nombre', 'apellido', 'telefono', 'correo','facultad','acciones'];
  dataSource!:MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _usurioService:UsuarioService ,private _snackBar: MatSnackBar){}
ngOnInit(): void {
  this.cargarUsuario();
}
  cargarUsuario(){
    this.listUsuario=this._usurioService.getUsuario();
    this.dataSource=new MatTableDataSource(this.listUsuario)
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
eliminarUsuario(index:number){
  console.log(index);
this._usurioService.eliminarUsuario(index);
this.cargarUsuario();

this._snackBar.open('Usuario fue eliminado con exito', '', {
  duration:5000,
  horizontalPosition:'center',
  verticalPosition:'bottom'
})
}


}

