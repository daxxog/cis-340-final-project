import { Input, Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { ProductService } from '../../../../api/services/product.service';
import { Product } from '../../../../api/models/product';
import { ProductsProviderService } from '../../../../services/products-provider.service';


@Component({
  selector: 'app-manage-product-delete-button',
  templateUrl: './manage-product-delete-button.component.html',
  styleUrls: ['./manage-product-delete-button.component.less']
})
export class ManageProductDeleteButtonComponent implements OnInit {
    @Input('product') product?: Product;
    public askAreYouSure: boolean = false;
    public deleting: boolean = false;

    constructor(
        private productService: ProductService,
        private productsProviderService: ProductsProviderService
    ) { }

    ngOnInit(): void { }

    doAskAreYouSure(): void {
        this.askAreYouSure = true;
    }

    cancelDelete(): void {
        this.askAreYouSure = false;
    }

    get productName(): string {
        return this.product?.name ?? '';
    }

    get productId(): number {
        return this.product?.id ?? -1;
    }

    async doDelete(): Promise<void> {
        this.deleting = true;

        if(this.productId !== -1) {
            const observable = this.productService.apiProductIdDelete$Json({ id: this.productId });
            await lastValueFrom(observable);
        }

        await this.productsProviderService.reload();
    }
}
