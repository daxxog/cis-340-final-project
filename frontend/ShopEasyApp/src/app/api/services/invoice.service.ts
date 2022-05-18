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

import { Invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiInvoiceGet
   */
  static readonly ApiInvoiceGetPath = '/api/Invoice';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoiceGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoiceGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Invoice>>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceService.ApiInvoiceGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Invoice>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiInvoiceGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoiceGet$Plain(params?: {
  }): Observable<Array<Invoice>> {

    return this.apiInvoiceGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Invoice>>) => r.body as Array<Invoice>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoiceGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoiceGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Invoice>>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceService.ApiInvoiceGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Invoice>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiInvoiceGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoiceGet$Json(params?: {
  }): Observable<Array<Invoice>> {

    return this.apiInvoiceGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Invoice>>) => r.body as Array<Invoice>)
    );
  }

  /**
   * Path part for operation apiInvoicePost
   */
  static readonly ApiInvoicePostPath = '/api/Invoice';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInvoicePost$Plain$Response(params?: {
    body?: Invoice
  }): Observable<StrictHttpResponse<Invoice>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceService.ApiInvoicePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Invoice>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiInvoicePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInvoicePost$Plain(params?: {
    body?: Invoice
  }): Observable<Invoice> {

    return this.apiInvoicePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Invoice>) => r.body as Invoice)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInvoicePost$Json$Response(params?: {
    body?: Invoice
  }): Observable<StrictHttpResponse<Invoice>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceService.ApiInvoicePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Invoice>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiInvoicePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInvoicePost$Json(params?: {
    body?: Invoice
  }): Observable<Invoice> {

    return this.apiInvoicePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Invoice>) => r.body as Invoice)
    );
  }

  /**
   * Path part for operation apiInvoiceIdGet
   */
  static readonly ApiInvoiceIdGetPath = '/api/Invoice/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoiceIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoiceIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Invoice>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceService.ApiInvoiceIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Invoice>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiInvoiceIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoiceIdGet$Plain(params: {
    id: number;
  }): Observable<Invoice> {

    return this.apiInvoiceIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Invoice>) => r.body as Invoice)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoiceIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoiceIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Invoice>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceService.ApiInvoiceIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Invoice>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiInvoiceIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoiceIdGet$Json(params: {
    id: number;
  }): Observable<Invoice> {

    return this.apiInvoiceIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Invoice>) => r.body as Invoice)
    );
  }

  /**
   * Path part for operation apiInvoiceIdPut
   */
  static readonly ApiInvoiceIdPutPath = '/api/Invoice/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoiceIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInvoiceIdPut$Response(params: {
    id: number;
    body?: Invoice
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceService.ApiInvoiceIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiInvoiceIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInvoiceIdPut(params: {
    id: number;
    body?: Invoice
  }): Observable<void> {

    return this.apiInvoiceIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiInvoiceIdDelete
   */
  static readonly ApiInvoiceIdDeletePath = '/api/Invoice/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoiceIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoiceIdDelete$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Invoice>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceService.ApiInvoiceIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Invoice>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiInvoiceIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoiceIdDelete$Plain(params: {
    id: number;
  }): Observable<Invoice> {

    return this.apiInvoiceIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Invoice>) => r.body as Invoice)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoiceIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoiceIdDelete$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Invoice>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceService.ApiInvoiceIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Invoice>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiInvoiceIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoiceIdDelete$Json(params: {
    id: number;
  }): Observable<Invoice> {

    return this.apiInvoiceIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Invoice>) => r.body as Invoice)
    );
  }

}
