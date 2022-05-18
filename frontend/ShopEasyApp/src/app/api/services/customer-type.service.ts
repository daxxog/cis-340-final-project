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

import { CustomerType } from '../models/customer-type';

@Injectable({
  providedIn: 'root',
})
export class CustomerTypeService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCustomerTypeGet
   */
  static readonly ApiCustomerTypeGetPath = '/api/CustomerType';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerTypeGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerTypeGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<CustomerType>>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerTypeService.ApiCustomerTypeGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CustomerType>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerTypeGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerTypeGet$Plain(params?: {
  }): Observable<Array<CustomerType>> {

    return this.apiCustomerTypeGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CustomerType>>) => r.body as Array<CustomerType>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerTypeGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerTypeGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<CustomerType>>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerTypeService.ApiCustomerTypeGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CustomerType>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerTypeGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerTypeGet$Json(params?: {
  }): Observable<Array<CustomerType>> {

    return this.apiCustomerTypeGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CustomerType>>) => r.body as Array<CustomerType>)
    );
  }

  /**
   * Path part for operation apiCustomerTypePost
   */
  static readonly ApiCustomerTypePostPath = '/api/CustomerType';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerTypePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerTypePost$Plain$Response(params?: {
    body?: CustomerType
  }): Observable<StrictHttpResponse<CustomerType>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerTypeService.ApiCustomerTypePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomerType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerTypePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerTypePost$Plain(params?: {
    body?: CustomerType
  }): Observable<CustomerType> {

    return this.apiCustomerTypePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CustomerType>) => r.body as CustomerType)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerTypePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerTypePost$Json$Response(params?: {
    body?: CustomerType
  }): Observable<StrictHttpResponse<CustomerType>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerTypeService.ApiCustomerTypePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomerType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerTypePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerTypePost$Json(params?: {
    body?: CustomerType
  }): Observable<CustomerType> {

    return this.apiCustomerTypePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CustomerType>) => r.body as CustomerType)
    );
  }

  /**
   * Path part for operation apiCustomerTypeIdGet
   */
  static readonly ApiCustomerTypeIdGetPath = '/api/CustomerType/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerTypeIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerTypeIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<CustomerType>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerTypeService.ApiCustomerTypeIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomerType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerTypeIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerTypeIdGet$Plain(params: {
    id: number;
  }): Observable<CustomerType> {

    return this.apiCustomerTypeIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CustomerType>) => r.body as CustomerType)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerTypeIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerTypeIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<CustomerType>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerTypeService.ApiCustomerTypeIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomerType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerTypeIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerTypeIdGet$Json(params: {
    id: number;
  }): Observable<CustomerType> {

    return this.apiCustomerTypeIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CustomerType>) => r.body as CustomerType)
    );
  }

  /**
   * Path part for operation apiCustomerTypeIdPut
   */
  static readonly ApiCustomerTypeIdPutPath = '/api/CustomerType/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerTypeIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerTypeIdPut$Response(params: {
    id: number;
    body?: CustomerType
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerTypeService.ApiCustomerTypeIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiCustomerTypeIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerTypeIdPut(params: {
    id: number;
    body?: CustomerType
  }): Observable<void> {

    return this.apiCustomerTypeIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCustomerTypeIdDelete
   */
  static readonly ApiCustomerTypeIdDeletePath = '/api/CustomerType/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerTypeIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerTypeIdDelete$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<CustomerType>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerTypeService.ApiCustomerTypeIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomerType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerTypeIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerTypeIdDelete$Plain(params: {
    id: number;
  }): Observable<CustomerType> {

    return this.apiCustomerTypeIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CustomerType>) => r.body as CustomerType)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerTypeIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerTypeIdDelete$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<CustomerType>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerTypeService.ApiCustomerTypeIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomerType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerTypeIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerTypeIdDelete$Json(params: {
    id: number;
  }): Observable<CustomerType> {

    return this.apiCustomerTypeIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CustomerType>) => r.body as CustomerType)
    );
  }

}
