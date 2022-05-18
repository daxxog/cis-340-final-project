import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { ResponsibleParty } from '../api/models/responsible-party';
import { ResponsiblePartyService } from '../api/services/responsible-party.service';


@Injectable({
  providedIn: 'root'
})
export class ResponsiblePartyProviderService {
    private _responsibleParties: Array<ResponsibleParty> = [];

    constructor(
        private responsiblePartyService: ResponsiblePartyService
    ) {
        this.reload(); // we can call this function again to reload changes to responsible parties
    }

    reload() {
        const observable = this.responsiblePartyService.apiResponsiblePartyGet$Json();
        lastValueFrom(observable).then(responsibleParties => this._responsibleParties = responsibleParties);
    }

    get responsibleParties(): Array<ResponsibleParty> {
        return this._responsibleParties.map(v => v);
    }
}
