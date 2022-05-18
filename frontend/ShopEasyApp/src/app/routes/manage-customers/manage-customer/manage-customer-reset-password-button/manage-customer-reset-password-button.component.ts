import { Input, Component, OnInit } from '@angular/core';

import { UpdateUser } from '../../../../api/models/update-user';


@Component({
  selector: 'app-manage-customer-reset-password-button',
  templateUrl: './manage-customer-reset-password-button.component.html',
  styleUrls: ['./manage-customer-reset-password-button.component.less']
})
export class ManageCustomerResetPasswordButtonComponent implements OnInit {
    @Input('updateUser') updateUser?: UpdateUser;
    public resettingPassword: boolean = false;

    constructor() { }

    ngOnInit(): void { }

    doResetPassword(): void {
        this.resettingPassword = true;
    }

    cancelResetPassword(): void {
        this.resettingPassword = false;
        delete this.updateUser!.password;
    }

    set password(_password: string) {
        this.updateUser!.password = _password;
    }

    get password(): string {
        return this.updateUser?.password ?? '';
    }
}
