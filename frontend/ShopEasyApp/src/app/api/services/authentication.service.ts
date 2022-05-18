/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AuthenticateRequest } from '../models/authenticate-request';
import { AuthenticateResponse } from '../models/authenticate-response';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAuthenticationAuthenticateGet
   */
  static readonly ApiAuthenticationAuthenticateGetPath = '/api/Authentication/authenticate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthenticationAuthenticateGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthenticationAuthenticateGet$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthenticationService.ApiAuthenticationAuthenticateGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuthenticationAuthenticateGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthenticationAuthenticateGet(params?: {
  }): Observable<void> {

    return this.apiAuthenticationAuthenticateGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAuthenticationAuthenticatePost
   */
  static readonly ApiAuthenticationAuthenticatePostPath = '/api/Authentication/authenticate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthenticationAuthenticatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthenticationAuthenticatePost$Plain$Response(params?: {
    body?: AuthenticateRequest
  }): Observable<StrictHttpResponse<AuthenticateResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthenticationService.ApiAuthenticationAuthenticatePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthenticateResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuthenticationAuthenticatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthenticationAuthenticatePost$Plain(params?: {
    body?: AuthenticateRequest
  }): Observable<AuthenticateResponse> {

    return this.apiAuthenticationAuthenticatePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AuthenticateResponse>) => r.body as AuthenticateResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthenticationAuthenticatePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthenticationAuthenticatePost$Json$Response(params?: {
    body?: AuthenticateRequest
  }): Observable<StrictHttpResponse<AuthenticateResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthenticationService.ApiAuthenticationAuthenticatePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthenticateResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuthenticationAuthenticatePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthenticationAuthenticatePost$Json(params?: {
    body?: AuthenticateRequest
  }): Observable<AuthenticateResponse> {

    return this.apiAuthenticationAuthenticatePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AuthenticateResponse>) => r.body as AuthenticateResponse)
    );
  }

}
