import { Input, Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { UserManagementService } from '../../../../api/services/user-management.service';
import { UsersProviderService } from '../../../../services/users-provider.service';
import { CustomersProviderService } from '../../../../services/customers-provider.service';


@Component({
  selector: 'app-manage-customer-delete-button',
  templateUrl: './manage-customer-delete-button.component.html',
  styleUrls: ['./manage-customer-delete-button.component.less']
})
export class ManageCustomerDeleteButtonComponent implements OnInit {
    @Input('username') username: string = '';
    public askAreYouSure: boolean = false;
    public deleting: boolean = false;

    constructor(
        private userManagementService: UserManagementService,
        private usersProviderService: UsersProviderService,
        private customersProviderService: CustomersProviderService
    ) { }

    ngOnInit(): void { }

    doAskAreYouSure(): void {
        this.askAreYouSure = true;
    }

    cancelDelete(): void {
        this.askAreYouSure = false;
    }

    async doDelete(): Promise<void> {
        this.deleting = true;

        const observable = this.userManagementService.apiUserManagementUsernameDelete$Json({ username: this.username });
        await lastValueFrom(observable);

        await this.usersProviderService.reload();
        await this.customersProviderService.reload();
    }
}
