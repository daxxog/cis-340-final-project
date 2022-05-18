import { Injectable } from '@angular/core';

import { GetProductType } from '../api/models/get-product-type';
import { ProductType } from '../api/models/product-type';


@Injectable({
  providedIn: 'root'
})
export class UtilService {
    private filterDigits: Array<string> =
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        .map(v => v.toString());

    constructor() { }

    formatDollars(cents: number) {
        const priceSplit = cents.toString().split('');
        const c1 = priceSplit.pop() || '0';
        const c2 = priceSplit.pop() || '0';

        priceSplit.push('.');
        priceSplit.push(c2);
        priceSplit.push(c1);

        return '$' + priceSplit.join('');
    }

    onlyDigits(s: string): string {
        return s.split('').filter(c => {
            return this.filterDigits.indexOf(c) !== -1;
        }).join('');
    }

    public findClothingProductTypeId(productTypes: Array<GetProductType | ProductType>): number {
        return productTypes
        .filter(productType => productType.name === 'Clothing')
        .map(productType => productType.id)[0] ?? -2;
    }
}
