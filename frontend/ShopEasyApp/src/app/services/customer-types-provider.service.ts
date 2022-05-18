import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { CustomerType } from '../api/models/customer-type';
import { CustomerTypeService } from '../api/services/customer-type.service';


@Injectable({
  providedIn: 'root'
})
export class CustomerTypesProviderService {
    private _customerTypes: Array<CustomerType> = [];

    constructor(
        private customerTypeService: CustomerTypeService
    ) {
        const observable = this.customerTypeService.apiCustomerTypeGet$Json();
        lastValueFrom(observable).then(customerTypes => this._customerTypes = customerTypes);
    }

    get customerTypes(): Array<CustomerType> {
        return this._customerTypes.map(v => v);
    }
}
