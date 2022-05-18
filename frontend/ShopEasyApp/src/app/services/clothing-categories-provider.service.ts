import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { ClothingCategory } from '../api/models/clothing-category';
import { ClothingCategoryService } from '../api/services/clothing-category.service';


@Injectable({
  providedIn: 'root'
})
export class ClothingCategoriesProviderService {
    private _clothingCategories: Array<ClothingCategory> = [];

    constructor(
        private clothingCategoryService: ClothingCategoryService
    ) {
        this.reload(); // we can call this function again to reload changes to clothing categories
    }

    reload() {
        const observable = this.clothingCategoryService.apiClothingCategoryGet$Json();
        lastValueFrom(observable).then(clothingCategories => this._clothingCategories = clothingCategories);
    }

    get clothingCategories(): Array<ClothingCategory> {
        return this._clothingCategories.map(v => v);
    }
}
