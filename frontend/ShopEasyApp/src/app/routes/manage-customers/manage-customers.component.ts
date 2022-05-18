import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { NgForm } from '@angular/forms'


import { UserManagementService } from '../../api/services/user-management.service';
import { CustomerService } from '../../api/services/customer.service';
import { CustomersProviderService } from '../../services/customers-provider.service';
import { UsersProviderService } from '../../services/users-provider.service';
import { ResponsibleParty } from '../../api/models/responsible-party';
import { Customer } from '../../api/models/customer';
import { NewUser } from '../../api/models/new-user';


@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.less']
})
export class ManageCustomersComponent implements OnInit {
    @ViewChild('search') searchElement?: ElementRef;
    public searchVal: string = '';
    public creating: boolean = false;
    public showCreateInterface: boolean = false;
    public newCustomer: Customer = {};
    public newCustomerNewUser: NewUser;

    constructor(
        private userManagementService: UserManagementService,
        private customersProviderService: CustomersProviderService,
        private usersProviderService: UsersProviderService,
        private customerService: CustomerService
    ) {
        this.resetCreate();
        this.newCustomerNewUser = this.emptyNewUser;
    }

    ngOnInit(): void {
        setTimeout( () => {
            this.searchElement!.nativeElement.focus();
        }, 0);
    }

    private get emptyNewUser(): NewUser {
        return {
            username: '',
            password: '',
            isAdmin: false
        };
    }

    openCreateInterface(): void {
        this.showCreateInterface = true;
    }

    set newCustomerPassword(password: string) {
        this.newCustomerNewUser.password = password;
    }

    get newCustomerPassword(): string {
        return this.newCustomerNewUser.password ?? '';
    }

    get canCreate(): boolean {
        return (

            this.creating === false && 
            ( (this.newCustomer.firstName ?? '') !== '') &&
            ( (this.newCustomer.lastName ?? '') !== '') &&
            ( (this.newCustomer.phoneNumber ?? '') !== '') &&
            ( (this.newCustomer.emailAddress ?? '') !== '') &&
            ( (this.newCustomerNewUser.username ?? '') !== '') &&
            ( (this.newCustomerNewUser.password ?? '') !== '') &&
            ( (this.newCustomer.customerTypeId ?? -1) !== -1) &&
            ( (this.newCustomer.responsiblePartyId ?? -1) !== -1) &&

            true
        );
    }

    async resetCreate(): Promise<void> {
        this.creating = false;
        this.showCreateInterface = false;
        this.newCustomer = {};

        await this.customersProviderService.reload();

        this.newCustomerNewUser = this.emptyNewUser;
    }

    get customers(): Array<Customer> {
        if(this.searchVal === '') {
            return this.customersProviderService.customers;
        } else {
            const lcSearch = this.searchVal.toLowerCase();
            const lcSearchSplit = lcSearch.split(' ');

            if(lcSearchSplit.length === 2) { // search for first and last name
                return this.customersProviderService.customers.filter(
                    customer => {
                        return (
                            (customer.firstName ?? '').toLowerCase().search(lcSearchSplit[0]) !== -1 &&
                            (customer.lastName ?? '').toLowerCase().search(lcSearchSplit[1]) !== -1 &&
                            true
                        );
                    }
                );
            } else { // search for last name or first name or email
                return this.customersProviderService.customers.filter(
                    customer => {
                        return (
                            (customer.firstName ?? '').toLowerCase().search(lcSearch) !== -1 ||
                            (customer.lastName ?? '').toLowerCase().search(lcSearch) !== -1 ||
                            (customer.emailAddress ?? '').toLowerCase().search(lcSearch) !== -1 ||
                            false
                        );
                    }
                );
            }
        }
    }

    get loading(): boolean {
        return this.customersProviderService.loading;
    }

    async onSubmit(f: NgForm): Promise<void> {
        if(this.canCreate) {
            this.creating = true;
            const observable = this.customerService.apiCustomerPost$Json({
                body: this.newCustomer
            });
            lastValueFrom(observable).then(async customer => {
                this.newCustomerNewUser.customerId = customer.id;
                const observable = this.userManagementService.apiUserManagementPost$Json({
                    body: this.newCustomerNewUser
                });
                lastValueFrom(observable).then(async user => {
                    await this.usersProviderService.reload();
                    await this.resetCreate();
                }).catch(async e => {
                    // could do some error handling here
                    await this.resetCreate();
                });
                await this.resetCreate();
            }).catch(async e => {
                // could do some error handling here
                await this.resetCreate();
            });
        }
    }

    get empty(): boolean {
        return !this.loading && ( this.customers.length === 0 );
    }
}
