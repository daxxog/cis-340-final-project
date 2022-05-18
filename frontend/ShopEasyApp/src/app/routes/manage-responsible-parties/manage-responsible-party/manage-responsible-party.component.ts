import { Input, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { lastValueFrom } from 'rxjs';

import { ResponsiblePartyService } from '../../../api/services/responsible-party.service';
import { ResponsibleParty } from '../../../api/models/responsible-party';


@Component({
  selector: 'app-manage-responsible-party',
  templateUrl: './manage-responsible-party.component.html',
  styleUrls: ['./manage-responsible-party.component.less']
})
export class ManageResponsiblePartyComponent implements OnInit {
    @Input('responsibleParty') responsibleParty?: ResponsibleParty;
    private _name: string = '';

    constructor(
        private responsiblePartyService: ResponsiblePartyService
    ) { }

    ngOnInit(): void {
        this._name = this.responsibleParty?.name ?? '';
    }

    get id(): number {
        return this.responsibleParty?.id ?? -1;
    }

    get changed(): boolean {
        return this._name !== this.responsibleParty?.name ?? ''
    }

    get name(): string {
        return this._name;
    }

    set name(_name: string) {
        this._name = _name;
    }

    async onSubmit(f: NgForm): Promise<void> {
        this.responsibleParty!.name = this.name;
        const observable = this.responsiblePartyService.apiResponsiblePartyIdPut(
            {
                id: this.id,
                body: this.responsibleParty
            }
        );
        lastValueFrom(observable).then(r => { }).catch(e => {
            // could do some error handling here
        });
    }
}
