import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { UtilService } from '../../services/util.service';
import { CountedProduct } from '../../interfaces/counted-product';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
    public placingOrder = false;
    public invoice: string = '';
    public hideForPrint: boolean = false;

    constructor(
        private cartService: CartService,
        private utilService: UtilService
    ) { }

    ngOnInit(): void { }

    get countedProducts(): Array<CountedProduct> {
        return this.cartService.products;
    }

    get empty(): boolean {
        return this.cartService.empty;
    }

    private get _total(): number {
        return this.countedProducts.map(
            countedProduct =>
                countedProduct.product.priceCents * countedProduct.count
        ).reduce( (a, c) => a + c);
    }

    get total(): string {
        return this.utilService.formatDollars(this._total);
    }

    async placeOrder(): Promise<void> {
        if(!this.placingOrder) {
            this.placingOrder = true;
            this.invoice = await this.cartService.checkout();
            this.placingOrder = false;
        }
    }

    get hasInvoice(): boolean {
        return this.invoice !== '';
    }

    print(): void {
        this.hideForPrint = true;
        setTimeout( () => {
            window.print();
        }, 1000);
    }
}
