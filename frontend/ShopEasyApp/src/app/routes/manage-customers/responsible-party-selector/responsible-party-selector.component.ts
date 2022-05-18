import { Input, Component, OnInit } from '@angular/core';

import { Customer } from '../../../api/models/customer';
import { ResponsibleParty } from '../../../api/models/responsible-party';
import { ResponsiblePartyProviderService } from '../../../services/responsible-party-provider.service';


@Component({
  selector: 'app-responsible-party-selector',
  templateUrl: './responsible-party-selector.component.html',
  styleUrls: ['./responsible-party-selector.component.less']
})
export class ResponsiblePartySelectorComponent implements OnInit {
    @Input('customer') customer?: Customer;

    constructor(
        private responsiblePartyProviderService: ResponsiblePartyProviderService
    ) { }

    get responsibleParties(): Array<ResponsibleParty> {
        return this.responsiblePartyProviderService.responsibleParties;
    }

    set responsiblePartyId(_responsiblePartyId: string) {
        this.customer!.responsiblePartyId = parseInt(_responsiblePartyId, 10);
    }

    get responsiblePartyId(): string {
        return (this.customer?.responsiblePartyId ?? -1).toString();
    }

    ngOnInit(): void { }
}
