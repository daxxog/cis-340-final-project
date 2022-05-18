import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { ShopService as _ShopService } from '../api/services/shop.service';
import { UtilService } from './util.service';
import { GetProduct } from '../api/models/get-product';
import { GetProductType } from '../api/models/get-product-type';
import { GetClothingCategory } from '../api/models/get-clothing-category';
import { GetInvoice } from '../api/models/get-invoice';


@Injectable({
  providedIn: 'root'
})
export class ShopService {
    private _products: Array<GetProduct> = [];
    private _productTypes: Array<GetProductType> = [];
    private _clothingCategories: Array<GetClothingCategory> = [];
    private __clothingProductTypeId: number | null = null;

    constructor(
        private shopService: _ShopService,
        private utilService: UtilService
    ) {
        lastValueFrom(this.shopService.apiShopProductsGet$Json()).then(
            _products => this._products = _products
        );
        lastValueFrom(this.shopService.apiShopProductTypesGet$Json()).then(
            _productTypes => {
                this._productTypes = _productTypes;
                this.__clothingProductTypeId = null;
            }
        );
        lastValueFrom(this.shopService.apiShopClothingCategoriesGet$Json()).then(
            _clothingCategories => this._clothingCategories = _clothingCategories
        );
    }

    async getInvoicesForRange(start: Date, end: Date): Promise<Array<GetInvoice>> {
        return await lastValueFrom(this.shopService.apiShopInvoicesStartTimestampEndTimestampGet$Json({
            startTimestamp: +(start),
            endTimestamp: +(end)
        }));
    }

    get products(): Array<GetProduct> {
        return this._products.map(product => product);
    }

    get productTypes(): Array<GetProductType> {
        return this._productTypes.map(productType => productType);
    }

    private get _clothingProductTypeId(): number {
        return this.utilService.findClothingProductTypeId(this._productTypes);
    }

    // cached getter
    get clothingProductTypeId(): number {
        return this.__clothingProductTypeId = ( this.__clothingProductTypeId ?? this._clothingProductTypeId );
    }

    get clothingCategories(): Array<GetClothingCategory> {
        return this._clothingCategories.map(clothingCategory => clothingCategory);
    }

    clothingCategoryForProduct(product: GetProduct | undefined): GetClothingCategory | undefined {
        return this._clothingCategories.filter(
            clothingCategory => clothingCategory.id === product?.clothingCategoryId
        )[0];
    }

    productTypeForProduct(product: GetProduct | undefined): GetProductType | undefined {
        return this._productTypes.filter(
            productType => productType.id === product?.productTypeId
        )[0];
    }
}
