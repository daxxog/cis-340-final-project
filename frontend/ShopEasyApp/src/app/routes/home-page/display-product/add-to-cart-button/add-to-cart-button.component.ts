import { Input, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { GetProduct } from '../../../../api/models/get-product';
import { CartService } from '../../../../services/cart.service';
import { UtilService } from '../../../../services/util.service';


@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.less']
})
export class AddToCartButtonComponent implements OnInit {
    @Input('product') product?: GetProduct;
    @ViewChild('quantity') quantityElement?: ElementRef;
    public askingQuantity: boolean = false;
    private _quantity: number = 1;
    private addingToCart: boolean = false;

    constructor(
        private cartService: CartService,
        private utilService: UtilService,
        private router: Router
    ) { }

    ngOnInit(): void { }

    askQuantity(): void {
        this.askingQuantity = true;
        setTimeout( () => {
            this.quantityElement!.nativeElement.focus();
        }, 0);
    }

    cancelAsk(): void {
        this.askingQuantity = false;
        this._quantity = 1;
    }

    set quantityVal(_quantityVal: string) {
        this._quantity = parseInt('0' + this.utilService.onlyDigits(_quantityVal), 10);
    }

    get quantityVal(): string {
        return this._quantity.toString();
    }

    get inCart(): boolean {
        return this.cartService.productInCart(this.product!);
    }

    get canAddToCart(): boolean {
        return !this.addingToCart && !this.inCart;
    }

    get inCartQuantity(): number {
        return this.cartService.products.filter(
            counted => 
                counted.product.id === (this.product?.id ?? -1)
        )[0].count;
    }

    addToCart(): void {
        if(this.canAddToCart) {
            this.addingToCart = true;

            for(let i = 0; i < this._quantity; i++) {
                this.cartService.add(this.product!);
            }

            this.cancelAsk();
            this.addingToCart = false;
        }
    }

    navCart() {
        this.router.navigate(['/cart']);
    }
}
