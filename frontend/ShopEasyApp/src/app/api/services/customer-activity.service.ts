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

import { CustomerActivity } from '../models/customer-activity';

@Injectable({
  providedIn: 'root',
})
export class CustomerActivityService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCustomerActivityGet
   */
  static readonly ApiCustomerActivityGetPath = '/api/CustomerActivity';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerActivityGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerActivityGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<CustomerActivity>>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerActivityService.ApiCustomerActivityGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CustomerActivity>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerActivityGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerActivityGet$Plain(params?: {
  }): Observable<Array<CustomerActivity>> {

    return this.apiCustomerActivityGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CustomerActivity>>) => r.body as Array<CustomerActivity>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerActivityGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerActivityGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<CustomerActivity>>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerActivityService.ApiCustomerActivityGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CustomerActivity>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerActivityGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerActivityGet$Json(params?: {
  }): Observable<Array<CustomerActivity>> {

    return this.apiCustomerActivityGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CustomerActivity>>) => r.body as Array<CustomerActivity>)
    );
  }

  /**
   * Path part for operation apiCustomerActivityPost
   */
  static readonly ApiCustomerActivityPostPath = '/api/CustomerActivity';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerActivityPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerActivityPost$Plain$Response(params?: {
    body?: CustomerActivity
  }): Observable<StrictHttpResponse<CustomerActivity>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerActivityService.ApiCustomerActivityPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomerActivity>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerActivityPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerActivityPost$Plain(params?: {
    body?: CustomerActivity
  }): Observable<CustomerActivity> {

    return this.apiCustomerActivityPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CustomerActivity>) => r.body as CustomerActivity)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerActivityPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerActivityPost$Json$Response(params?: {
    body?: CustomerActivity
  }): Observable<StrictHttpResponse<CustomerActivity>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerActivityService.ApiCustomerActivityPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomerActivity>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerActivityPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerActivityPost$Json(params?: {
    body?: CustomerActivity
  }): Observable<CustomerActivity> {

    return this.apiCustomerActivityPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CustomerActivity>) => r.body as CustomerActivity)
    );
  }

  /**
   * Path part for operation apiCustomerActivityIdGet
   */
  static readonly ApiCustomerActivityIdGetPath = '/api/CustomerActivity/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerActivityIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerActivityIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<CustomerActivity>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerActivityService.ApiCustomerActivityIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomerActivity>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerActivityIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerActivityIdGet$Plain(params: {
    id: number;
  }): Observable<CustomerActivity> {

    return this.apiCustomerActivityIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CustomerActivity>) => r.body as CustomerActivity)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerActivityIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerActivityIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<CustomerActivity>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerActivityService.ApiCustomerActivityIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomerActivity>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerActivityIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerActivityIdGet$Json(params: {
    id: number;
  }): Observable<CustomerActivity> {

    return this.apiCustomerActivityIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CustomerActivity>) => r.body as CustomerActivity)
    );
  }

  /**
   * Path part for operation apiCustomerActivityIdPut
   */
  static readonly ApiCustomerActivityIdPutPath = '/api/CustomerActivity/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerActivityIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerActivityIdPut$Response(params: {
    id: number;
    body?: CustomerActivity
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerActivityService.ApiCustomerActivityIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `apiCustomerActivityIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerActivityIdPut(params: {
    id: number;
    body?: CustomerActivity
  }): Observable<void> {

    return this.apiCustomerActivityIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCustomerActivityIdDelete
   */
  static readonly ApiCustomerActivityIdDeletePath = '/api/CustomerActivity/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerActivityIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerActivityIdDelete$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<CustomerActivity>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerActivityService.ApiCustomerActivityIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomerActivity>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerActivityIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerActivityIdDelete$Plain(params: {
    id: number;
  }): Observable<CustomerActivity> {

    return this.apiCustomerActivityIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CustomerActivity>) => r.body as CustomerActivity)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerActivityIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerActivityIdDelete$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<CustomerActivity>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerActivityService.ApiCustomerActivityIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomerActivity>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerActivityIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerActivityIdDelete$Json(params: {
    id: number;
  }): Observable<CustomerActivity> {

    return this.apiCustomerActivityIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CustomerActivity>) => r.body as CustomerActivity)
    );
  }

}
