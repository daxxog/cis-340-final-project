import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.less']
})
export class HomeButtonComponent implements OnInit {
    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit(): void { }


    get onHome(): boolean {
        if(this.userService.isAdmin) {
            return this.router.routerState.snapshot.url === '/admin';
        } else {
            return this.router.routerState.snapshot.url === '/';
        }
    }

    navHome(): void {
        if(this.userService.isAdmin) {
            this.router.navigate(['/admin']); // go to main admin panel
        } else {
            this.router.navigate(['/']); // go to home page
        }
    }
}
