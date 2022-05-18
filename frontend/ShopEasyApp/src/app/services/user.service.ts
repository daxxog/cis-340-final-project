import { Injectable } from '@angular/core';

import { AuthorizationTokenProviderService } from './authorization-token-provider.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(
        private authorizationTokenProviderService: AuthorizationTokenProviderService
    ) { }

    get username(): string {
        return this.authorizationTokenProviderService.authenticateResponse.username ?? '';
    }

    get isAdmin(): boolean {
        return this.authorizationTokenProviderService.authenticateResponse.isAdmin ?? false;
    }
}
