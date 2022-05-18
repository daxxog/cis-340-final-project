import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { NgForm } from '@angular/forms'

import { Product } from '../../api/models/product';
import { ProductService } from '../../api/services/product.service';
import { ProductsProviderService } from '../../services/products-provider.service';
import { ProductTypesProviderService } from '../../services/product-types-provider.service';


@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.less']
})
export class ManageProductsComponent implements OnInit {
    @ViewChild('search') searchElement?: ElementRef;
    public searchVal: string = '';
    public creating: boolean = false;
    public showCreateInterface: boolean = false;
    public newProduct: Product;

    constructor(
        private productService: ProductService,
        private productsProviderService: ProductsProviderService,
        private productTypesProviderService: ProductTypesProviderService
    ) {
        this.newProduct = this.emptyNewProduct;
    }

    ngOnInit(): void {
        setTimeout( () => {
            this.searchElement!.nativeElement.focus();
        }, 0);
    }

    openCreateInterface(): void {
        this.showCreateInterface = true;
    }

    get products(): Array<Product> {
        if(this.searchVal === '') {
            return this.productsProviderService.products;
        } else {
            const lcSearch = this.searchVal.toLowerCase();

            return this.productsProviderService.products.filter(
                product => {
                    return (
                        (product.name ?? '').toLowerCase().search(lcSearch) !== -1 ||
                        (product.description ?? '').toLowerCase().search(lcSearch) !== -1 ||
                        false
                    );
                }
            );
        }
    }

    get loading(): boolean {
        return this.productsProviderService.loading;
    }

    get empty(): boolean {
        return this.productsProviderService.products.length === 0;
    }

    get newProductValidClothingCategory(): boolean {
        if(!this.newProductIsClothing) {
            return true;
        } else {
            return (this.newProduct.clothingCategoryId ?? -1) !== -1;
        }
    }

    get newProductIsClothing(): boolean {
        return (this.newProduct.productTypeId ?? -1) === this.productTypesProviderService.clothingProductTypeId;
    }

    get emptyNewProduct(): Product {
        return {
            priceCents: 0
        };
    }

    resetCreate(): void {
        this.creating = false;
        this.showCreateInterface = false;
        this.newProduct = this.emptyNewProduct;
    }

    get canCreate(): boolean {
        return (
            this.creating === false &&
            ( this.newProduct.name ?? '' ) !== '' &&
            ( this.newProduct.description ?? '' ) !== '' &&
            ( this.newProduct.productTypeId ?? -1 ) !== -1 &&
            this.newProductValidClothingCategory
        );
    }

    async onSubmit(f: NgForm): Promise<void> {
        if(this.canCreate) {
            this.creating = true;
            const observable = this.productService.apiProductPost$Json({ body: this.newProduct });
            await lastValueFrom(observable); // could do error handling, but at this point I'm just trying to get the project done
            await this.productsProviderService.reload();
            this.resetCreate();
        }
    }
}
