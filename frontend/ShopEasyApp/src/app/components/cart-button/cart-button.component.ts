import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.less']
})
export class CartButtonComponent implements OnInit {
    constructor(
        private cartService: CartService,
        private router: Router
    ) { }

    ngOnInit(): void { }

    get cartStatus(): string {
        return this.cartService.size > 0 ? this.cartService.size.toString() : "empty";
    }

    get classes(): string {
        const classes = ['skeleton'];

        if(this.cartStatus !== "empty") {
            classes.push('button-primary');
        }

        return classes.join(' ');
    }

    navCart(): void {
        this.router.navigate(['/cart']); // go to cart
    }
}
