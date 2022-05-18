import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { CustomerService } from '../api/services/customer.service';
import { UsersProviderService } from './users-provider.service';
import { Customer } from '../api/models/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomersProviderService {
    private _customers: Array<Customer> = [];
    private _loading: boolean = false;

    constructor(
        private customerService: CustomerService,
        private usersProviderService: UsersProviderService
    ) {
        this.reload();
    }

    async reload() {
        this._loading = true;

        const observable = this.customerService.apiCustomerGet$Json();
        const customers = await lastValueFrom(observable);

        // create a filter for customers that have an active username
        const customerFilter = await Promise.all(customers.map(async (customer) => {
            const user = await this.usersProviderService.findUser(customer);
            return !((user ?? false) === false); // user exists for customer
        }));

        // run the filter that we obtained asynchronously
        this._customers = customers.filter( (_v, index) => customerFilter[index]);

        this._loading = false;
    }

    get loading(): boolean {
        return this._loading;
    }

    get customers(): Array<Customer> {
        return this._customers.map(customer => customer); // immutable array
    }
}
