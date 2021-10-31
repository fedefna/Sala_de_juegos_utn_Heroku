import { useAnimation } from '@angular/animations';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return this.authService.getUserLogged().pipe(map( aux => {
        if(aux === null || aux === undefined)
        {
          this.router.navigate(['/login']);
          return false;
        }
        else
        {
          return true;
        }
    }))

    }
  
}
