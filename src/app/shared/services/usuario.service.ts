import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Usuario } from 'src/app/classes/usuario';
import { DatePipe } from '@angular/common';


@Injectable()
export class UsuarioService {

  private usuariosRef: AngularFirestoreCollection;
  private fechaIngreso = new Date().toISOString();

  constructor(private db: AngularFirestore, private datePipe: DatePipe) {
    this.usuariosRef = this.db.collection('LogUsuairos');
   }

  public logearUsuario(usuario:Usuario){
    return this.usuariosRef.add({...usuario, fecha: this.fechaIngreso});
  }
}
