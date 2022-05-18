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

import { GetClothingCategory } from '../models/get-clothing-category';
import { GetInvoice } from '../models/get-invoice';
import { GetProduct } from '../models/get-product';
import { GetProductType } from '../models/get-product-type';
import { NewOrder } from '../models/new-order';

@Injectable({
  providedIn: 'root',
})
export class ShopService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiShopProductsGet
   */
  static readonly ApiShopProductsGetPath = '/api/Shop/Products';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShopProductsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopProductsGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<GetProduct>>> {

    const rb = new RequestBuilder(this.rootUrl, ShopService.ApiShopProductsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetProduct>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiShopProductsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopProductsGet$Plain(params?: {
  }): Observable<Array<GetProduct>> {

    return this.apiShopProductsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GetProduct>>) => r.body as Array<GetProduct>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShopProductsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopProductsGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<GetProduct>>> {

    const rb = new RequestBuilder(this.rootUrl, ShopService.ApiShopProductsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetProduct>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiShopProductsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopProductsGet$Json(params?: {
  }): Observable<Array<GetProduct>> {

    return this.apiShopProductsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GetProduct>>) => r.body as Array<GetProduct>)
    );
  }

  /**
   * Path part for operation apiShopProductTypesGet
   */
  static readonly ApiShopProductTypesGetPath = '/api/Shop/ProductTypes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShopProductTypesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopProductTypesGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<GetProductType>>> {

    const rb = new RequestBuilder(this.rootUrl, ShopService.ApiShopProductTypesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetProductType>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiShopProductTypesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopProductTypesGet$Plain(params?: {
  }): Observable<Array<GetProductType>> {

    return this.apiShopProductTypesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GetProductType>>) => r.body as Array<GetProductType>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShopProductTypesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopProductTypesGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<GetProductType>>> {

    const rb = new RequestBuilder(this.rootUrl, ShopService.ApiShopProductTypesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetProductType>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiShopProductTypesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopProductTypesGet$Json(params?: {
  }): Observable<Array<GetProductType>> {

    return this.apiShopProductTypesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GetProductType>>) => r.body as Array<GetProductType>)
    );
  }

  /**
   * Path part for operation apiShopClothingCategoriesGet
   */
  static readonly ApiShopClothingCategoriesGetPath = '/api/Shop/ClothingCategories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShopClothingCategoriesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopClothingCategoriesGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<GetClothingCategory>>> {

    const rb = new RequestBuilder(this.rootUrl, ShopService.ApiShopClothingCategoriesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetClothingCategory>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiShopClothingCategoriesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopClothingCategoriesGet$Plain(params?: {
  }): Observable<Array<GetClothingCategory>> {

    return this.apiShopClothingCategoriesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GetClothingCategory>>) => r.body as Array<GetClothingCategory>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShopClothingCategoriesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopClothingCategoriesGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<GetClothingCategory>>> {

    const rb = new RequestBuilder(this.rootUrl, ShopService.ApiShopClothingCategoriesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetClothingCategory>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiShopClothingCategoriesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopClothingCategoriesGet$Json(params?: {
  }): Observable<Array<GetClothingCategory>> {

    return this.apiShopClothingCategoriesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GetClothingCategory>>) => r.body as Array<GetClothingCategory>)
    );
  }

  /**
   * Path part for operation apiShopPlaceOrderPost
   */
  static readonly ApiShopPlaceOrderPostPath = '/api/Shop/PlaceOrder';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShopPlaceOrderPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiShopPlaceOrderPost$Plain$Response(params?: {
    body?: NewOrder
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ShopService.ApiShopPlaceOrderPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiShopPlaceOrderPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiShopPlaceOrderPost$Plain(params?: {
    body?: NewOrder
  }): Observable<string> {

    return this.apiShopPlaceOrderPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShopPlaceOrderPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiShopPlaceOrderPost$Json$Response(params?: {
    body?: NewOrder
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ShopService.ApiShopPlaceOrderPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiShopPlaceOrderPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiShopPlaceOrderPost$Json(params?: {
    body?: NewOrder
  }): Observable<string> {

    return this.apiShopPlaceOrderPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiShopInvoicesGet
   */
  static readonly ApiShopInvoicesGetPath = '/api/Shop/Invoices';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShopInvoicesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopInvoicesGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<GetInvoice>>> {

    const rb = new RequestBuilder(this.rootUrl, ShopService.ApiShopInvoicesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetInvoice>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiShopInvoicesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopInvoicesGet$Plain(params?: {
  }): Observable<Array<GetInvoice>> {

    return this.apiShopInvoicesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GetInvoice>>) => r.body as Array<GetInvoice>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShopInvoicesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopInvoicesGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<GetInvoice>>> {

    const rb = new RequestBuilder(this.rootUrl, ShopService.ApiShopInvoicesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetInvoice>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiShopInvoicesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopInvoicesGet$Json(params?: {
  }): Observable<Array<GetInvoice>> {

    return this.apiShopInvoicesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GetInvoice>>) => r.body as Array<GetInvoice>)
    );
  }

  /**
   * Path part for operation apiShopInvoicesStartTimestampEndTimestampGet
   */
  static readonly ApiShopInvoicesStartTimestampEndTimestampGetPath = '/api/Shop/Invoices/{startTimestamp}/{endTimestamp}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShopInvoicesStartTimestampEndTimestampGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopInvoicesStartTimestampEndTimestampGet$Plain$Response(params: {
    startTimestamp: number;
    endTimestamp: number;
  }): Observable<StrictHttpResponse<Array<GetInvoice>>> {

    const rb = new RequestBuilder(this.rootUrl, ShopService.ApiShopInvoicesStartTimestampEndTimestampGetPath, 'get');
    if (params) {
      rb.path('startTimestamp', params.startTimestamp, {});
      rb.path('endTimestamp', params.endTimestamp, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetInvoice>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiShopInvoicesStartTimestampEndTimestampGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopInvoicesStartTimestampEndTimestampGet$Plain(params: {
    startTimestamp: number;
    endTimestamp: number;
  }): Observable<Array<GetInvoice>> {

    return this.apiShopInvoicesStartTimestampEndTimestampGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GetInvoice>>) => r.body as Array<GetInvoice>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShopInvoicesStartTimestampEndTimestampGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopInvoicesStartTimestampEndTimestampGet$Json$Response(params: {
    startTimestamp: number;
    endTimestamp: number;
  }): Observable<StrictHttpResponse<Array<GetInvoice>>> {

    const rb = new RequestBuilder(this.rootUrl, ShopService.ApiShopInvoicesStartTimestampEndTimestampGetPath, 'get');
    if (params) {
      rb.path('startTimestamp', params.startTimestamp, {});
      rb.path('endTimestamp', params.endTimestamp, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetInvoice>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiShopInvoicesStartTimestampEndTimestampGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopInvoicesStartTimestampEndTimestampGet$Json(params: {
    startTimestamp: number;
    endTimestamp: number;
  }): Observable<Array<GetInvoice>> {

    return this.apiShopInvoicesStartTimestampEndTimestampGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GetInvoice>>) => r.body as Array<GetInvoice>)
    );
  }

}
