import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';


@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {
    private _username: string = "";
    private _password: string = "";
    public loginErrorMessage: string = "";
    public loggingIn: boolean = false;

    constructor(
        private loginService: LoginService,
        private router: Router
    ) { }

    ngOnInit(): void { }

    get loginButtonClasses(): string[] {
        let classes: string[] = [];

        if(!this.loggingIn) {
            classes.push('button-primary');
        }

        if(this.loginErrorMessage !== '') {
            classes.push('bad-button');
        }

        return classes;
    }

    get loginButtonText(): string {
        if(this.loggingIn) {
            return 'Logging in';
        } else if(this.loginErrorMessage !== '') {
            return 'Error'
        } else {
            return 'Log in';
        }
    }

    private resetLoginErrorMessage() {
        this.loginErrorMessage = ''; // reset the error message when we change the value
    }

    set username(_username: string) {
        this.resetLoginErrorMessage();
        this._username = _username;
    }

    get username(): string {
        return this._username;
    }

    set password(_password: string) {
        this.resetLoginErrorMessage();
        this._password = _password;
    }

    get password(): string {
        return this._password;
    }

    async onSubmit(f: NgForm): Promise<void> {
        this.loggingIn = true;
        const loggedIn = await this.loginService.tryLogin(this.username, this.password);
        this.loggingIn = false;

        if(loggedIn) {
            this.router.navigate(['/']); // go to home after logging in
        } else {
            this.loginErrorMessage = 'Invalid username or password!';
        }
    }
}
