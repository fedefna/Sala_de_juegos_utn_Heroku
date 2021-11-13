import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Encuesta } from 'src/app/Interfaces/encuesta.interface';
import { AuthService } from './auth-service.service';
import { map } from 'rxjs/operators';
import { Usuario } from 'src/app/classes/usuario';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  private encuestasRef: AngularFirestoreCollection<Encuesta>;
  public unaEncuesta: Encuesta[] = [];
  private fecha = new Date().toISOString();
  public usuario: Usuario = new Usuario();

  constructor(private authService: AuthService, private afs: AngularFirestore) {
    this.encuestasRef = this.afs.collection('Encuesta');
    this.authService.getUserLogged().subscribe(user => {

      if (!user) {
        return;
      }
      if (!user.email) {
        return;
      }
      this.usuario.id = user.uid;
      this.usuario.email = user.email;
    });
  }

  guardarEncuesta(nombre: string, apellido: string, edad: string, telefono: string, juegoFavorito: string, juegoNuevo: string, comentario: string) {

    let encuesta: Encuesta = {
      uid: this.usuario.id,
      email: this.usuario.email,
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      telefono: telefono,
      juegoFavorito: juegoFavorito,
      juegoNuevo: juegoNuevo,
      comentario: comentario,
      fecha: this.fecha
    }

    return this.encuestasRef.add(encuesta);
  }




}
