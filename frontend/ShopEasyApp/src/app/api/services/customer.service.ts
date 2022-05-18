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

import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCustomerGet
   */
  static readonly ApiCustomerGetPath = '/api/Customer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Customer>>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Customer>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGet$Plain(params?: {
  }): Observable<Array<Customer>> {

    return this.apiCustomerGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Customer>>) => r.body as Array<Customer>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Customer>>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Customer>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGet$Json(params?: {
  }): Observable<Array<Customer>> {

    return this.apiCustomerGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Customer>>) => r.body as Array<Customer>)
    );
  }

  /**
   * Path part for operation apiCustomerPost
   */
  static readonly ApiCustomerPostPath = '/api/Customer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerPost$Plain$Response(params?: {
    body?: Customer
  }): Observable<StrictHttpResponse<Customer>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Customer>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerPost$Plain(params?: {
    body?: Customer
  }): Observable<Customer> {

    return this.apiCustomerPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Customer>) => r.body as Customer)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerPost$Json$Response(params?: {
    body?: Customer
  }): Observable<StrictHttpResponse<Customer>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Customer>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerPost$Json(params?: {
    body?: Customer
  }): Observable<Customer> {

    return this.apiCustomerPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Customer>) => r.body as Customer)
    );
  }

  /**
   * Path part for operation apiCustomerIdGet
   */
  static readonly ApiCustomerIdGetPath = '/api/Customer/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Customer>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Customer>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerIdGet$Plain(params: {
    id: number;
  }): Observable<Customer> {

    return this.apiCustomerIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Customer>) => r.body as Customer)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Customer>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Customer>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerIdGet$Json(params: {
    id: number;
  }): Observable<Customer> {

    return this.apiCustomerIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Customer>) => r.body as Customer)
    );
  }

  /**
   * Path part for operation apiCustomerIdPut
   */
  static readonly ApiCustomerIdPutPath = '/api/Customer/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerIdPut$Response(params: {
    id: number;
    body?: Customer
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiCustomerIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerIdPut(params: {
    id: number;
    body?: Customer
  }): Observable<void> {

    return this.apiCustomerIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCustomerIdDelete
   */
  static readonly ApiCustomerIdDeletePath = '/api/Customer/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerIdDelete$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Customer>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Customer>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerIdDelete$Plain(params: {
    id: number;
  }): Observable<Customer> {

    return this.apiCustomerIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Customer>) => r.body as Customer)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerIdDelete$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Customer>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Customer>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerIdDelete$Json(params: {
    id: number;
  }): Observable<Customer> {

    return this.apiCustomerIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Customer>) => r.body as Customer)
    );
  }

}
