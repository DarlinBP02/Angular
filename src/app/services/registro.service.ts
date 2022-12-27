import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private firestore: AngularFirestore) { }
  agregarregistro(horasextras: any): Promise<any> {
    return this.firestore.collection('horasextras').add(horasextras);
  }
  getHoras(): Observable<any> {
    return this.firestore.collection('horasextras').snapshotChanges();
  }

}
