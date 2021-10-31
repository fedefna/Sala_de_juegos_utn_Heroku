import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from 'src/app/classes/usuario';


@Injectable()
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router) { }

  public signIn(usuario: Usuario) {
    return this.afAuth.signInWithEmailAndPassword(usuario.email, usuario.password);
  }

  public emailSignUp(usuario: Usuario) {
    return this.afAuth.createUserWithEmailAndPassword(usuario.email, usuario.password);
  }

  async googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return await this.oAuthLogin(provider)
      .then(value => {
        console.log('Autenticacion con google ok. ', value),
          this.router.navigateByUrl('/home');
      })
      .catch(error => {
        console.log('Login error: ', error);
      });
  }

  public googlelog() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  async logout() {
    return await this.afAuth.signOut().then(() => {
      this.router.navigate(['/home']);
    });
  }

  private oAuthLogin(provider: firebase.auth.AuthProvider) {
    return this.afAuth.signInWithPopup(provider);
  }

  public getUserLogged() {
    return this.afAuth.authState;
  }

}
