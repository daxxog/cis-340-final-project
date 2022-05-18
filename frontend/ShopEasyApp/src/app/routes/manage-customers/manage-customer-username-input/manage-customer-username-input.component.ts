import { Input, Component, OnInit } from '@angular/core';

import { UsersProviderService } from '../../../services/users-provider.service';
import { NewUser } from '../../../api/models/new-user';


@Component({
  selector: 'app-manage-customer-username-input',
  templateUrl: './manage-customer-username-input.component.html',
  styleUrls: ['./manage-customer-username-input.component.less']
})
export class ManageCustomerUsernameInputComponent implements OnInit {
    @Input('newUser') newUser?: NewUser;
    private _usernameIsValid: boolean = true;
    private _username: string = '';

    constructor(
        private usersProviderService: UsersProviderService
    ) { }

    ngOnInit(): void { }

    set username(_username: string) {
        this._username = _username;

        if(this._usernameIsValid = this.usersProviderService.syncUsernameValidityChecker(_username)) {
            this.newUser!.username = _username;
        } else {
            this.newUser!.username = '';
        }
    }

    get username(): string {
        return this._username;
    }

    get usernameIsValid(): boolean {
        return this._usernameIsValid;
    }

    get inputClasses(): string {
        const classes = ["skeleton", "u-full-width"];

        if(!this.usernameIsValid) {
            classes.push("invalid");
        }

        return classes.join(" ");
    }
}
