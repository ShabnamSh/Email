import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private appService: AppService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {//Check Authenticate
    if (this.appService.isLogedIn)
      return true;
    else {
      console.log('You are Not Authenticate');
      this.router.navigateByUrl('/fr-login');
      return false;
    }
  }
}
