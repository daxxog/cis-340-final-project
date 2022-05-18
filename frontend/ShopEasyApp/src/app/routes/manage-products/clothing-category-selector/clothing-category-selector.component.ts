import { Input, Component, OnInit } from '@angular/core';

import { Product } from '../../../api/models/product';
import { ClothingCategory } from '../../../api/models/clothing-category';
import { ClothingCategoriesProviderService } from '../../../services/clothing-categories-provider.service';


@Component({
  selector: 'app-clothing-category-selector',
  templateUrl: './clothing-category-selector.component.html',
  styleUrls: ['./clothing-category-selector.component.less']
})
export class ClothingCategorySelectorComponent implements OnInit {
    @Input('product') product?: Product;

    constructor(
        private clothingCategoriesProviderService: ClothingCategoriesProviderService
    ) { }

    get clothingCategories(): Array<ClothingCategory> {
        return this.clothingCategoriesProviderService.clothingCategories;
    }

    set clothingCategoryId(_clothingCategoryId: string) {
        this.product!.clothingCategoryId = parseInt(_clothingCategoryId, 10);
    }

    get clothingCategoryId(): string {
        return (this.product?.clothingCategoryId ?? -1).toString();
    }

    ngOnInit(): void { }
}
