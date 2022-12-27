import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-listregistro',
  templateUrl: './listregistro.component.html',
  styleUrls: ['./listregistro.component.css']
})
export class ListregistroComponent implements OnInit {
  horas: any[] = [];

  constructor(private _registro: RegistroService) {
  }
  ngOnInit(): void {
    this.getHoras()

  }

  getHoras() {
    this._registro.getHoras().subscribe(data => {
      this.horas = [];
      data.forEach((element: any) => {
        this.horas.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.horas);
    });
  }

}
