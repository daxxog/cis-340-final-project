import { Input, Component, OnInit } from '@angular/core';

import { GetProduct } from '../../../api/models/get-product';
import { GetClothingCategory } from '../../../api/models/get-clothing-category';
import { ShopService } from '../../../services/shop.service';
import { UtilService } from '../../../services/util.service';


@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.less']
})
export class DisplayProductComponent implements OnInit {
    @Input('product') product?: GetProduct;

    constructor(
        private utilService: UtilService,
        private shopService: ShopService
    ) { }

    ngOnInit(): void { }

    get priceFmt(): string {
        return this.utilService.formatDollars(this.product?.priceCents ?? 0);
    }

    get isClothing(): boolean {
        return this.product?.productTypeId === this.shopService.clothingProductTypeId;
    }

    get clothingCategory(): string {
        return this.shopService.clothingCategoryForProduct(this.product)?.name ?? '';
    }

    get productType(): string {
        return this.shopService.productTypeForProduct(this.product)?.name ?? '';
    }
}
