import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

import { LoginService } from '../services/login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
    constructor(
        private loginService: LoginService,
        private router: Router
    ) { }

    async canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Promise<boolean | UrlTree>
    {
        const loggedIn = await this.loginService.loggedIn;

        if(!loggedIn) {
            this.router.navigate(['/login']);
        }

        return loggedIn;
    }
}
