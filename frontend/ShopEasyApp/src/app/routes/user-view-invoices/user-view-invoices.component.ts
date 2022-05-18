import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFilterFn } from '@angular/material/datepicker';
import { lastValueFrom } from 'rxjs';

import { ShopService } from '../../api/services/shop.service';
import { GetInvoice } from '../../api/models/get-invoice';


@Component({
  selector: 'app-user-view-invoices',
  templateUrl: './user-view-invoices.component.html',
  styleUrls: ['./user-view-invoices.component.less']
})
export class UserViewInvoicesComponent implements OnInit {
    public submitting: boolean = false;
    public printing: boolean = false;
    public didSubmit: boolean = false;
    private today: Date = new Date();
    public dateFilter: DateFilterFn<any>;
    public range: FormGroup;
    public invoices: Array<GetInvoice> = [];

    constructor(
        private shopService: ShopService
    ) {
        this.dateFilter = (_d: Date | null): boolean => {
            const d: Date = (_d ?? this.today);

            return d.valueOf() < this.today.valueOf();
        };

       this.range = new FormGroup({
            start: new FormControl(this.today, [ Validators.required ]),
            end: new FormControl([ Validators.required ]),
        });
    }

    ngOnInit(): void { }

    get hasStart(): boolean {
        return !((this.range.value.start ?? false) === false)
    }

    get hasEnd(): boolean {
        return !((this.range.value.end ?? false) === false)
    }

    get canSubmit(): boolean {
        return this.range.valid && this.hasStart && this.hasEnd && !this.submitting;
    }

    get empty(): boolean {
        return this.invoices.length === 0 && this.didSubmit === true;
    }

    async find(): Promise<void> {
        const SECONDS_IN_A_DAY = 86400;

        if(this.canSubmit) {
            this.submitting = true;
            const observable = this.shopService.apiShopInvoicesStartTimestampEndTimestampGet$Json({
                // convert date object to unix timestamps and add a full day to the end timestamp
                // this is because the day will start at midnight, which will limit our search results to
                // the previous day without adding this to the query
                startTimestamp: Math.floor(this.range.value.start.valueOf() / 1000) ,
                endTimestamp: Math.floor(this.range.value.end.valueOf() / 1000) + SECONDS_IN_A_DAY ,
            });
            this.invoices = await lastValueFrom(observable);
            this.submitting = false;
            this.didSubmit = true;
        }
    }

    print(): void {
        this.printing = true;
        setTimeout( () => {
            window.print();
        }, 1000);
    }
}
