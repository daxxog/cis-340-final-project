import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ShopService } from '../../services/shop.service';
import { GetProduct } from '../../api/models/get-product';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {
    @ViewChild('search') searchElement?: ElementRef;
    public searchVal: string = '';

    constructor(
        private shopService: ShopService
    ) { }

    ngOnInit(): void {
        setTimeout( () => {
            this.searchElement!.nativeElement.focus();
        }, 0);
    }

    get products(): Array<GetProduct> {
        if(this.searchVal === '') {
            return this.shopService.products;
        } else {
            return this.shopService.products.filter(
                product => {
                    return (
                        (product.description ?? '').toLowerCase().search(this.searchVal.toLowerCase()) !== -1 ||
                        (product.name ?? '').toLowerCase().search(this.searchVal.toLowerCase()) !== -1 ||
                        false
                    );
                }
            );
        }
    }
}
