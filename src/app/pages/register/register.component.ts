import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/classes/usuario';
import { AuthService } from 'src/app/shared/services/auth-service.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  public us = new Usuario();
  public mostrarError = false;
  public errorMessage:String="";

  constructor(private authService: AuthService,private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  registrarUsuario(){
    this.authService.emailSignUp(this.us)
    .then(value => {
      console.log('AuthService.SingUp(): Usuario creado y logeado con exito:',value);
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
        this.errorMessage=err;
        this.mostrarError=true;
        console.log('Registration error: ', err.message);
      });
  }

  obtenerEstadoSesion(){
    this.authService.getUserLogged().subscribe(res=>{
      console.log(res);
    })
  }
}
