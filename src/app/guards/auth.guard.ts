import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CanLoad } from '@angular/router/src/interfaces';
import { Route } from '@angular/compiler/src/core';
import { SessionService } from '../shared/services/session.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private sessionService: SessionService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.handle();
  }
  canLoad(route: Route): boolean {
    return this.handle();
  }

  handle = () => {
    if(!this.sessionService.isLoggedIn) {
      this.router.navigate([this.sessionService.getDefaultRoute()]);
      return false;
    }
    return true;
  }
}
