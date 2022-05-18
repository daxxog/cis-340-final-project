import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { ProductService } from '../api/services/product.service';
import { UsersProviderService } from './users-provider.service';
import { Product } from '../api/models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsProviderService {
    private _products: Array<Product> = [];
    private _loading: boolean = false;

    constructor(
        private productService: ProductService,
        private usersProviderService: UsersProviderService
    ) {
        this.reload();
    }

    async reload() {
        this._loading = true;

        const observable = this.productService.apiProductGet$Json();
        this._products = await lastValueFrom(observable);


        this._loading = false;
    }

    get loading(): boolean {
        return this._loading;
    }

    get products(): Array<Product> {
        return this._products.map(product => product); // immutable array
    }
}
