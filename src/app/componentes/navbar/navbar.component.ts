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

}
