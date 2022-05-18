import { Injectable } from '@angular/core';

import { AuthenticateResponse } from '../api/models/authenticate-response';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationTokenProviderService {
    private _authenticateResponse: AuthenticateResponse;
    private _localStorageKey: string = 'shopEasySession';

    constructor() {
        const item = localStorage.getItem(this._localStorageKey);
        this._authenticateResponse = JSON.parse(item ?? '{}');
    }

    get authenticateResponse(): AuthenticateResponse {
        return this._authenticateResponse;
    }

    public update(authenticateResponse: AuthenticateResponse): void {
        // save the successful login response in local storage
        localStorage.setItem(this._localStorageKey, JSON.stringify(
            this._authenticateResponse = authenticateResponse
        ));
    }

    public delete(): void {
        this.update({});
    }

    public getAuthorizationToken(): string {
        return this._authenticateResponse.token ?? '';
    }
}
