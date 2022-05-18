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

import { ProductType } from '../models/product-type';

@Injectable({
  providedIn: 'root',
})
export class ProductTypeService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiProductTypeGet
   */
  static readonly ApiProductTypeGetPath = '/api/ProductType';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductTypeGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductTypeGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ProductType>>> {

    const rb = new RequestBuilder(this.rootUrl, ProductTypeService.ApiProductTypeGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ProductType>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductTypeGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductTypeGet$Plain(params?: {
  }): Observable<Array<ProductType>> {

    return this.apiProductTypeGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ProductType>>) => r.body as Array<ProductType>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductTypeGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductTypeGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ProductType>>> {

    const rb = new RequestBuilder(this.rootUrl, ProductTypeService.ApiProductTypeGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ProductType>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductTypeGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductTypeGet$Json(params?: {
  }): Observable<Array<ProductType>> {

    return this.apiProductTypeGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ProductType>>) => r.body as Array<ProductType>)
    );
  }

  /**
   * Path part for operation apiProductTypePost
   */
  static readonly ApiProductTypePostPath = '/api/ProductType';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductTypePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductTypePost$Plain$Response(params?: {
    body?: ProductType
  }): Observable<StrictHttpResponse<ProductType>> {

    const rb = new RequestBuilder(this.rootUrl, ProductTypeService.ApiProductTypePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductTypePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductTypePost$Plain(params?: {
    body?: ProductType
  }): Observable<ProductType> {

    return this.apiProductTypePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ProductType>) => r.body as ProductType)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductTypePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductTypePost$Json$Response(params?: {
    body?: ProductType
  }): Observable<StrictHttpResponse<ProductType>> {

    const rb = new RequestBuilder(this.rootUrl, ProductTypeService.ApiProductTypePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductTypePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductTypePost$Json(params?: {
    body?: ProductType
  }): Observable<ProductType> {

    return this.apiProductTypePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ProductType>) => r.body as ProductType)
    );
  }

  /**
   * Path part for operation apiProductTypeIdGet
   */
  static readonly ApiProductTypeIdGetPath = '/api/ProductType/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductTypeIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductTypeIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<ProductType>> {

    const rb = new RequestBuilder(this.rootUrl, ProductTypeService.ApiProductTypeIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductTypeIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductTypeIdGet$Plain(params: {
    id: number;
  }): Observable<ProductType> {

    return this.apiProductTypeIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ProductType>) => r.body as ProductType)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductTypeIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductTypeIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<ProductType>> {

    const rb = new RequestBuilder(this.rootUrl, ProductTypeService.ApiProductTypeIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductTypeIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductTypeIdGet$Json(params: {
    id: number;
  }): Observable<ProductType> {

    return this.apiProductTypeIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ProductType>) => r.body as ProductType)
    );
  }

  /**
   * Path part for operation apiProductTypeIdPut
   */
  static readonly ApiProductTypeIdPutPath = '/api/ProductType/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductTypeIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductTypeIdPut$Response(params: {
    id: number;
    body?: ProductType
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductTypeService.ApiProductTypeIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiProductTypeIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductTypeIdPut(params: {
    id: number;
    body?: ProductType
  }): Observable<void> {

    return this.apiProductTypeIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiProductTypeIdDelete
   */
  static readonly ApiProductTypeIdDeletePath = '/api/ProductType/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductTypeIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductTypeIdDelete$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<ProductType>> {

    const rb = new RequestBuilder(this.rootUrl, ProductTypeService.ApiProductTypeIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductTypeIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductTypeIdDelete$Plain(params: {
    id: number;
  }): Observable<ProductType> {

    return this.apiProductTypeIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ProductType>) => r.body as ProductType)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductTypeIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductTypeIdDelete$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<ProductType>> {

    const rb = new RequestBuilder(this.rootUrl, ProductTypeService.ApiProductTypeIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductTypeIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductTypeIdDelete$Json(params: {
    id: number;
  }): Observable<ProductType> {

    return this.apiProductTypeIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ProductType>) => r.body as ProductType)
    );
  }

}
