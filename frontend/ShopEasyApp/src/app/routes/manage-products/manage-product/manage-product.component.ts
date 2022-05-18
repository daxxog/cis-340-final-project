import { Input, Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { Product } from '../../../api/models/product';
import { ProductService } from '../../../api/services/product.service';
import { ProductsProviderService } from '../../../services/products-provider.service';
import { ProductTypesProviderService } from '../../../services/product-types-provider.service';


@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.less']
})
export class ManageProductComponent implements OnInit {
    @Input('product') product?: Product;
    public updatedProduct: Product = {};
    private updating: boolean = false;

    constructor(
        private productTypesProviderService: ProductTypesProviderService,
        private productService: ProductService,
        private productsProviderService: ProductsProviderService
    ) { }

    ngOnInit(): void {
        this.reload();
    }

    reload(): void {
        // clone product model data
        this.updatedProduct = JSON.parse(JSON.stringify(this.product));
    }

    get id(): number {
        return this.product?.id ?? -1;
    }

    set name(_name: string) {
        this.updatedProduct.name = _name;
    }

    get name(): string {
        return this.updatedProduct?.name ?? '';
    }

    set description(_description: string) {
        this.updatedProduct.description = _description;
    }

    get description(): string {
        return this.updatedProduct?.description ?? '';
    }

    get isClothing(): boolean {
        return (this.updatedProduct.productTypeId ?? -1) === this.productTypesProviderService.clothingProductTypeId;
    }

    get validClothingCategory(): boolean {
        if(!this.isClothing) {
            return true;
        } else {
            return (this.updatedProduct.clothingCategoryId ?? -1) !== -1;
        }
    }

    get changed(): boolean {
        return !(
            this.updatedProduct.name === this.product?.name &&
            this.updatedProduct.description === this.product?.description &&
            this.updatedProduct.productTypeId === this.product?.productTypeId &&
            this.updatedProduct.clothingCategoryId === this.product?.clothingCategoryId &&
            this.updatedProduct.priceCents === this.product?.priceCents &&
            true
        ) && this.validClothingCategory;
    }

    get canUpdate(): boolean {
        return !this.updating && this.changed;
    }

    async doUpdateProduct(): Promise<void> {
        if(this.canUpdate) {
            this.updating = true;

            const observable = this.productService.apiProductIdPut({
                id: this.updatedProduct.id ?? -1,
                body: this.updatedProduct,
            });

            await lastValueFrom(observable);
            await this.productsProviderService.reload();
            this.reload();
            this.updating = false;
        }
    }
}
