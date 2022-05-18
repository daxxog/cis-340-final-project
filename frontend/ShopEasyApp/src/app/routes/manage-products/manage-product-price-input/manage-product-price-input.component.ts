import { Input, Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Product } from '../../../api/models/product';
import { UtilService } from '../../../services/util.service';


@Component({
  selector: 'app-manage-product-price-input',
  templateUrl: './manage-product-price-input.component.html',
  styleUrls: ['./manage-product-price-input.component.less']
})
export class ManageProductPriceInputComponent implements OnInit {
    @Input('product') product?: Product;
    @ViewChild('dollars') dollarsElement?: ElementRef;

    public editing: boolean = false;
    private centsChanged: boolean = false;

    constructor(
        private utilService: UtilService
    ) { }

    ngOnInit(): void { }

    parseDigits(s: string): number {
        return parseInt('0' + this.utilService.onlyDigits(s), 10);
    }

    set cents(_cents: number) {
        this.product!.priceCents = _cents;
    }

    get cents(): number {
        return this.product?.priceCents ?? 0;
    }


    get nPriceDollars(): number {
        return Math.floor(this.cents / 100);
    }

    get nPriceCents(): number {
        const _substr = '0' + this.cents.toString().substr(-2);
        return parseInt(_substr, 10);
    }

    set priceDollars(_priceDollars: string) {
        const dollars = this.parseDigits(_priceDollars);
        this.cents = (dollars * 100) + this.nPriceCents;
    }

    get priceDollars(): string {
        return '$' + this.nPriceDollars;
    }

    set priceCents(_priceCents: string) {
        const cents = this.parseDigits(this.utilService.onlyDigits(_priceCents).substr(-2));
        this.cents = (this.nPriceDollars * 100) + cents;
    }

    get priceCents(): string {
        let _str = '' + this.nPriceCents;

        if (_str.length === 1) {
            _str = '0' + _str;
        }

        return '.' + _str;
    }

    edit(): void {
        this.editing = true;
        setTimeout( () => {
            this.dollarsElement!.nativeElement.focus();
        }, 0);
    }
}
