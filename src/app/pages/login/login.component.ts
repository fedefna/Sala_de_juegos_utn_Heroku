import { Component, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/classes/usuario';
import { AuthService } from 'src/app/shared/services/auth-service.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  public us = new Usuario();
  public mostrarError = false;

  constructor(private authService: AuthService,
    private router: Router, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
  }

  public signIn(){
    this.authService.signIn(this.us)
    .then(usua => {
      this.mostrarError=false;
      console.log('AuthService.SingIn(): Usuario logeado con exito:',usua);
      this.usuarioService.logearUsuario(this.us).then(
        ok => { 
          console.log("Usuario agregado a la collection 'LogUsuarios'.");
        }
      ).catch(
        error => {
          console.log(error);
        }
      )
      this.router.navigateByUrl('/home');
    })
    .catch(err => {
      this.mostrarError=true;
      console.log('Login error: ', err.message);
    });
  }

  loginGoogle(){
    this.authService.googleLogin();
  }

  obtenerEstadoSesion(){
    this.authService.getUserLogged().subscribe(res=>{
      console.log(res);
    })
  }

  completar(){
    this.us.email = "fede.fna@hotmail.com";
    this.us.password = "asdasd";
    console.log(this.us);
  }

}
