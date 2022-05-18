import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

import { UserService } from '../services/user.service';


@Injectable({
  providedIn: 'root'
})
export class UserAuthorizationGuard implements CanActivate {
    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    async canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Promise<boolean | UrlTree>
    {
        const isAdmin = this.userService.isAdmin;

        if(isAdmin) {
            this.router.navigate(['/admin']);
        }

        return !isAdmin;
    }
}
