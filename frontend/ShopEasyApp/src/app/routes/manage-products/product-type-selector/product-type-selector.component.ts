import { Input, Component, OnInit } from '@angular/core';

import { Product } from '../../../api/models/product';
import { ProductType } from '../../../api/models/product-type';
import { ProductTypesProviderService } from '../../../services/product-types-provider.service';


@Component({
  selector: 'app-product-type-selector',
  templateUrl: './product-type-selector.component.html',
  styleUrls: ['./product-type-selector.component.less']
})
export class ProductTypeSelectorComponent implements OnInit {
    @Input('product') product?: Product;

    constructor(
        private productTypesProviderService: ProductTypesProviderService
    ) { }

    get productTypes(): Array<ProductType> {
        return this.productTypesProviderService.productTypes;
    }

    set productTypeId(_productTypeId: string) {
        this.product!.productTypeId = parseInt(_productTypeId, 10);
    }

    get productTypeId(): string {
        return (this.product?.productTypeId ?? -1).toString();
    }

    ngOnInit(): void { }
}
