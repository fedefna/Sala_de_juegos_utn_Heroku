import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Mensaje } from 'src/app/Interfaces/mensaje.interface';
import { Usuario } from 'src/app/classes/usuario';
import { AuthService } from './auth-service.service';

@Injectable()
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  public chats: Mensaje[] = [];
  public usuario: Usuario=new Usuario();

  constructor( private afs:AngularFirestore, private authService: AuthService) {
    this.itemsCollection = this.afs.collection<Mensaje>('Chats', ref=> ref.orderBy('fecha','desc').limit(5));

    this.authService.getUserLogged().subscribe( user =>{

      if( !user){
        return;
      }
      if(!user.email){
        return;
      }

      if (user.displayName==null){
        this.usuario.nombre=user.email;
      }else{
        this.usuario.nombre=user.displayName;;
      }
      this.usuario.id=user.uid;
      this.usuario.email=user.email;
    } )

  }


  cargarMensajes(){
    this.itemsCollection = this.afs.collection<Mensaje>('Chats', ref=> ref.orderBy('fecha','desc').limit(5));
    return this.itemsCollection.valueChanges()
      .map((mensajes: Mensaje[])=>{
        console.log(mensajes);

        this.chats = [];

        for(let mensaje of mensajes){
          this.chats.unshift(mensaje);
        }
      })
  }

  agregarMensaje( texto: string ){
    let mensaje: Mensaje={
        nombre: this.usuario.nombre,
        uid: this.usuario.id,
        mensaje: texto,
        fecha: new Date().getTime()
      }
    return this.itemsCollection.add(mensaje);
  }
}
