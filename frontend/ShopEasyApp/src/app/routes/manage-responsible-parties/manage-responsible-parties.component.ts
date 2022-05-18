import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { NgForm } from '@angular/forms'

import { ResponsiblePartyService } from '../../api/services/responsible-party.service';
import { ResponsiblePartyProviderService } from '../../services/responsible-party-provider.service';
import { ResponsibleParty } from '../../api/models/responsible-party';


@Component({
  selector: 'app-manage-responsible-parties',
  templateUrl: './manage-responsible-parties.component.html',
  styleUrls: ['./manage-responsible-parties.component.less']
})
export class ManageResponsiblePartiesComponent implements OnInit {
    public responsibleParties: Array<ResponsibleParty> = [];
    public loading: boolean = true;
    public creating: boolean = false;
    public showCreateInterface: boolean = false;
    public newResponsibleParty: ResponsibleParty = {};

    constructor(
        private responsiblePartyService: ResponsiblePartyService,
        private responsiblePartyProviderService: ResponsiblePartyProviderService
    ) {
        const observable = responsiblePartyService.apiResponsiblePartyGet$Json();
        lastValueFrom(observable).then(responsibleParties => {
            this.loading = false;
            this.responsibleParties = responsibleParties;
        });
    }

    ngOnInit(): void { }

    openCreateInterface(): void {
        this.showCreateInterface = true;
    }

    get canCreate(): boolean {
        return ( (this.newResponsibleParty.name ?? '') !== '') && this.creating === false;
    }

    resetCreate(): void {
        this.creating = false;
        this.showCreateInterface = false;
        this.newResponsibleParty = {};
    }

    async onSubmit(f: NgForm): Promise<void> {
        if(this.canCreate) {
            this.creating = true;
            const observable = this.responsiblePartyService.apiResponsiblePartyPost$Json({
                body: this.newResponsibleParty
            });
            lastValueFrom(observable).then(responsibleParty => {
                // so we can see the new responsible party in the current view
                this.responsibleParties.push(responsibleParty);

                // so we can see the new responsible party in the drop down for create and update customer
                this.responsiblePartyProviderService.reload();

                this.resetCreate();
            }).catch(e => {
                // could do some error handling here
                this.resetCreate();
            });
        }
    }

    get empty(): boolean {
        return !this.loading && ( this.responsibleParties.length === 0 );
    }
}
