import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.less']
})
export class AdminPanelComponent implements OnInit {
    constructor(
        private router: Router
    ) { }

    ngOnInit(): void { }

    navResponsibleParties() {
        this.router.navigate(['/manage-responsible-parties']);
    }

    navCustomers() {
        this.router.navigate(['/manage-customers']);
    }

    navProducts() {
        this.router.navigate(['/manage-products']);
    }

    navInvoices() {
        this.router.navigate(['/admin/invoices']);
    }
}
