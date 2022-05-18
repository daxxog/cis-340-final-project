import { Input, Component, OnInit } from '@angular/core';

import { Customer } from '../../../api/models/customer';
import { CustomerType } from '../../../api/models/customer-type';
import { CustomerTypesProviderService } from '../../../services/customer-types-provider.service';


@Component({
  selector: 'app-customer-type-selector',
  templateUrl: './customer-type-selector.component.html',
  styleUrls: ['./customer-type-selector.component.less']
})
export class CustomerTypeSelectorComponent implements OnInit {
    @Input('customer') customer?: Customer;

    constructor(
        private customerTypesProviderService: CustomerTypesProviderService
    ) { }

    get customerTypes(): Array<CustomerType> {
        return this.customerTypesProviderService.customerTypes;
    }

    set customerTypeId(_customerTypeId: string) {
        this.customer!.customerTypeId = parseInt(_customerTypeId, 10);
    }

    get customerTypeId(): string {
        return (this.customer?.customerTypeId ?? -1).toString();
    }

    ngOnInit(): void { }
}
