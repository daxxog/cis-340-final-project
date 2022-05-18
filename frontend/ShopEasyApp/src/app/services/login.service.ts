import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs'; 

import { AuthenticationService } from '../api/services/authentication.service';
import { AuthenticateResponse } from '../api/models/authenticate-response';
import { StrictHttpResponse } from '../api/strict-http-response';
import { AuthorizationTokenProviderService } from './authorization-token-provider.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private _loggedIn: Promise<boolean>;

    constructor(
        private authenticationService: AuthenticationService,
        private authorizationTokenProviderService: AuthorizationTokenProviderService
    ) {
        this._loggedIn = new Promise( resolve => {
            if( (this.authorizationTokenProviderService.authenticateResponse.username ?? false) !== false) {
                const observable = this.authenticationService.apiAuthenticationAuthenticateGet$Response();

                lastValueFrom(observable).then(r => {
                    resolve(true);
                }).catch(r => {
                    resolve(false);
                });
            } else {
                resolve(false);
            }
        });

        this._loggedIn.then(loggedIn => {
            if(loggedIn === false) {
                // clear the invalid session, so we quickly know we are not logged in for future requests
                this.logout();
            }
        });
    }

    private save(response: StrictHttpResponse<AuthenticateResponse>): void {
        this.authorizationTokenProviderService.update(response.body);
    }

    get loggedIn(): Promise<boolean> {
        return this._loggedIn;
    }

    logout(): void {
        this.authorizationTokenProviderService.delete();
    }

    async tryLogin(username: string, password: string): Promise<boolean> {
        const observable = this.authenticationService.apiAuthenticationAuthenticatePost$Json$Response({
            body: {
                username: username,
                password: password
            }
        });

        return (this._loggedIn = new Promise( resolve => {
            lastValueFrom(observable).then(loginResponse => {
                resolve(loginResponse.ok);
                this.save(loginResponse);
            }).catch(loginResponse => {
                resolve(loginResponse.ok);
            });
        }));
    }
}
