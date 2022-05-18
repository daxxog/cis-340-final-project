import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { InvoiceService } from '../../api/services/invoice.service';
import { Invoice } from '../../api/models/invoice';


@Component({
  selector: 'app-admin-view-invoices',
  templateUrl: './admin-view-invoices.component.html',
  styleUrls: ['./admin-view-invoices.component.less']
})
export class AdminViewInvoicesComponent implements OnInit {
    public printing: boolean = false;
    public invoices: Array<Invoice> = [];
    private invoicesPromise: Promise<Array<Invoice>>;

    constructor(
        private invoiceService: InvoiceService
    ) {
        const observable = this.invoiceService.apiInvoiceGet$Json();
        this.invoicesPromise = lastValueFrom(observable);
    }

    async ngOnInit(): Promise<void> {
        this.invoices = await this.invoicesPromise;
    }

    print(): void {
        this.printing = true;
        setTimeout( () => {
            window.print();
        }, 1000);
    }
}
