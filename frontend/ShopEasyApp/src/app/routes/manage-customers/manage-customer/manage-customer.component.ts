import { Input, Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { Customer } from '../../../api/models/customer';
import { GetUser } from '../../../api/models/get-user';
import { UpdateUser } from '../../../api/models/update-user';
import { UserManagementService } from '../../../api/services/user-management.service';
import { CustomerService } from '../../../api/services/customer.service';
import { UsersProviderService } from '../../../services/users-provider.service';
import { CustomersProviderService } from '../../../services/customers-provider.service';


@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.less']
})
export class ManageCustomerComponent implements OnInit {
    @Input('customer') customer?: Customer;
    private customerGetUser?: GetUser;
    public customerUpdateUser: UpdateUser;
    public updatedCustomer: Customer = {};
    private updating: boolean = false;

    constructor(
        private usersProviderService: UsersProviderService,
        private userManagementService: UserManagementService,
        private customersProviderService: CustomersProviderService,
        private customerService: CustomerService
    ) {
        this.customerUpdateUser = {
            username: '',
            isAdmin: false
        }
    }

    async ngOnInit(): Promise<void> {
        await this.reload();
    }

    async reload(): Promise<void> {
        this.customerGetUser = await this.usersProviderService.findUser(this.customer!);

        // load the username to potentially update the password for
        this.customerUpdateUser.username = this.customerGetUser!.username;

        // clone customer model data
        this.updatedCustomer = JSON.parse(JSON.stringify(this.customer));
    }

    get firstName(): string {
        return ( this.updatedCustomer.firstName ?? '' );
    }

    set firstName(_firstName: string) {
        this.updatedCustomer.firstName = _firstName;
    }

    get lastName(): string {
        return ( this.updatedCustomer.lastName ?? '' );
    }

    set lastName(_lastName: string) {
        this.updatedCustomer.lastName = _lastName;
    }

    get phoneNumber(): string {
        return ( this.updatedCustomer.phoneNumber ?? '' );
    }

    set phoneNumber(_phoneNumber: string) {
        this.updatedCustomer.phoneNumber = _phoneNumber;
    }

    get emailAddress(): string {
        return ( this.updatedCustomer.emailAddress ?? '' );
    }

    set emailAddress(_emailAddress: string) {
        this.updatedCustomer.emailAddress = _emailAddress;
    }

    get username(): string {
        return this.customerGetUser?.username ?? '';
    }
    set username(_username: string) { /* read only */ }

    get changed(): boolean {
        return !(
            this.updatedCustomer.firstName === this.customer?.firstName &&
            this.updatedCustomer.lastName === this.customer?.lastName &&
            this.updatedCustomer.phoneNumber === this.customer?.phoneNumber &&
            this.updatedCustomer.emailAddress === this.customer?.emailAddress &&
            this.updatedCustomer.customerTypeId === this.customer?.customerTypeId &&
            this.updatedCustomer.responsiblePartyId === this.customer?.responsiblePartyId &&
            ( this.customerUpdateUser.password ?? '' ) === '' &&
            true
        );
    }

    get canUpdate(): boolean {
        return !this.updating && this.changed;
    }

    async doUpdateUser(): Promise<void> {
        if(this.canUpdate) {
            this.updating = true;

            const observableUpdateUser = this.userManagementService.apiUserManagementUsernamePut({
                username: this.customerUpdateUser.username,
                body: this.customerUpdateUser
            });

            const observableUpdateCustomer = this.customerService.apiCustomerIdPut({
                id: this.updatedCustomer.id ?? -1,
                body: this.updatedCustomer
            });

            await Promise.all([
                lastValueFrom(observableUpdateUser),
                lastValueFrom(observableUpdateCustomer)
            ]);
            await this.customersProviderService.reload()
            await this.reload();
            this.updating = false;
        }
    }
}
