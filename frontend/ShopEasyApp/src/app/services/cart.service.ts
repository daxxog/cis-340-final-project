import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { ShopService } from '../api/services/shop.service';
import { GetProduct } from '../api/models/get-product';
import { CountedProduct } from '../interfaces/counted-product';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {
    private _products: Array<GetProduct>;
    private _localStorageKey: string;

    constructor(
        private shopService: ShopService,
        private userService: UserService
    ) {
        this._localStorageKey = 'shopEasyCart.' + this.userService.username;
        const v = localStorage.getItem(this._localStorageKey);
        this._products = JSON.parse(v ?? '[]');
    }

    private save(): void {
        localStorage.setItem(
            this._localStorageKey,
            JSON.stringify(this._products)
        );
    }

    productInCart(product: GetProduct): boolean {
        return this._products.filter(_product => _product.id === product.id).length > 0;
    }

    // count the products in the cart and return a list containing the counts
    get products(): Array<CountedProduct> {
        const _counts: Record<number, number> = {}; // K product id <-> V count
        const _productsById: Record<number, GetProduct> = {}; // K product id <-> V product

        // iterate through all the products and count them
        // also, mapping product to ID while we iterate
        this._products.forEach(product => {
            _counts[product.id] = ( _counts[product.id] ?? 0 ) + 1
            _productsById[product.id] = product;
        });


        // fix the funky behavior where JavaScript Record keys are actually strings, but we want numbers
        const entries: Array<Array<number>> = Object.entries(_counts).map(a => {
            return a.map(v => {
                return parseInt(v.toString(), 10);
            });
        });

        // map CountedProduct over the entries of our counts Record
        return entries.map( kv => {
            const productId: number = kv[0],
                  count: number = kv[1];

            return {
                product: _productsById[productId],
                count: count
            };
        });
    }

    get size(): number {
        return this._products.length;
    }

    get empty(): boolean {
        return this.size === 0;
    }

    // add a product to the cart
    add(product: GetProduct) {
        this._products.push(product);
        this.save();
    }

    // remove all products from the cart
    clear() {
        this._products = [];
        this.save();
    }

    // remove a specific product from the cart
    remove(product: GetProduct) {
        if(this.productInCart(product)) {
            this._products = this._products.filter(
                _product => _product.id !== product.id
            );
        }

        this.save();
    }

    async checkout(): Promise<string> {
        const observable = this.shopService.apiShopPlaceOrderPost$Json({
            body: {
                productIDs: this._products.map(product => product.id)
            }
        });

        // checking out returns an invoice
        let invoice = await lastValueFrom(observable);

        this.clear(); // make the cart empty after checkout

        return invoice;
    }
}
