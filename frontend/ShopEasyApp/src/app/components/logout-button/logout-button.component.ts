import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service'
import { UserService } from '../../services/user.service'


@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.less']
})
export class LogoutButtonComponent implements OnInit {
    constructor(
        private loginService: LoginService,
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit(): void { }

    get username(): string {
        return this.userService.username;
    }

    get isUser(): boolean {
        return !this.userService.isAdmin;
    }

    get onInvoices(): boolean {
        return this.router.routerState.snapshot.url === '/invoices';
    }

    logout(): void {
        this.loginService.logout();
        this.router.navigate(['/login']); // go to login page
    }
}
