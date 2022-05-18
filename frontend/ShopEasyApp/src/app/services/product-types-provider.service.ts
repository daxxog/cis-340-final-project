import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { ProductType } from '../api/models/product-type';
import { ProductTypeService } from '../api/services/product-type.service';
import { UtilService } from './util.service';


@Injectable({
  providedIn: 'root'
})
export class ProductTypesProviderService {
    private _productTypes: Array<ProductType> = [];
    private __clothingProductTypeId: number | null = null;

    constructor(
        private productTypeService: ProductTypeService,
        private utilService: UtilService
    ) {
        this.reload(); // we can call this function again to reload changes to product types
    }

    reload() {
        const observable = this.productTypeService.apiProductTypeGet$Json();
        lastValueFrom(observable).then(productTypes => {
            this._productTypes = productTypes;
            this.__clothingProductTypeId = null; // reset cache
        });
    }

    private get _clothingProductTypeId(): number {
        return this.utilService.findClothingProductTypeId(this._productTypes);
    }

    // cached getter
    get clothingProductTypeId(): number {
        return this.__clothingProductTypeId = ( this.__clothingProductTypeId ?? this._clothingProductTypeId );
    }

    get productTypes(): Array<ProductType> {
        return this._productTypes.map(v => v);
    }
}
