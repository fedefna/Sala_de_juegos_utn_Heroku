import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userLogged = this.authService.getUserLogged();
  userLoggedIn: boolean = false;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.authService.getUserLogged().subscribe(res => {
      console.log("getUserLogged. ", res);
      if (res) this.userLoggedIn = true;
      else this.userLoggedIn = false;
    })
  }

  logOut() {
    this.authService.logout();
  }


  goToLogin() {
    this.router.navigate(['login']);
  }

  getUserState() {
    this.authService.getUserLogged().subscribe(res => {
      console.log("NAvBar.ts: respuestaState: ", res);
    })
  }

  jugarAhorcado(){
    this.router.navigate(["juegos/ahorcado"]);
  }

  jugarMayorMenor(){
    this.router.navigate(["juegos/mayorMenor"]);
  }

  jugarPreeguntados(){
    this.router.navigate(["juegos/preguntados"]);
  }

  jugarAdivinarPalabra(){
    this.router.navigate(["juegos/adivinarPalabra"]);
  }

  goHome(){
    this.router.navigate(["home"]);
  }

  goQuienSoy(){
    this.router.navigate(["quien-soy"]);
  }

  goResultados(){
    this.router.navigate(["resultados"]);
  }

}
