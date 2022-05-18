import { Input, Component, OnInit } from '@angular/core';

import { CountedProduct } from '../../../interfaces/counted-product';
import { UtilService } from '../../../services/util.service';
import { CartService } from '../../../services/cart.service';


@Component({
  selector: 'app-display-cart-item',
  templateUrl: './display-cart-item.component.html',
  styleUrls: ['./display-cart-item.component.less']
})
export class DisplayCartItemComponent implements OnInit {
    @Input('countedProduct') countedProduct?: CountedProduct;

    constructor(
        private utilService: UtilService,
        private cartService: CartService
    ) { }

    ngOnInit(): void { }

    get name(): string {
        return this.countedProduct?.product.name ?? '';
    }

    private get _subtotal(): number {
        return (this.countedProduct?.product.priceCents ?? 0) * (this.countedProduct?.count ?? 1);
    }

    get subtotal(): string {
        return this.utilService.formatDollars(this._subtotal);
    }

    get quantity(): string {
        return (this.countedProduct?.count ?? 1).toString();
    }

    removeFromCart(): void {
        this.cartService.remove(this.countedProduct!.product);
    }
}
