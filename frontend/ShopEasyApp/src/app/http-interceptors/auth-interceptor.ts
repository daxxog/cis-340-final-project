import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

import { AuthorizationTokenProviderService } from '../services/authorization-token-provider.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authorizationTokenProviderService: AuthorizationTokenProviderService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // Get the auth token from the service.
        const authToken = this.authorizationTokenProviderService.getAuthorizationToken();

        // Clone the request and replace the original headers with
        // cloned headers, updated with the authorization.
        const authReq = req.clone({ setHeaders: { Authorization: authToken } });

        // send cloned request with header to the next handler.
        return next.handle(authReq);
    }
}
