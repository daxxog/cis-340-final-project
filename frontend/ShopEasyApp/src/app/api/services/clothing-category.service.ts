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

import { ClothingCategory } from '../models/clothing-category';

@Injectable({
  providedIn: 'root',
})
export class ClothingCategoryService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiClothingCategoryGet
   */
  static readonly ApiClothingCategoryGetPath = '/api/ClothingCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClothingCategoryGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClothingCategoryGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ClothingCategory>>> {

    const rb = new RequestBuilder(this.rootUrl, ClothingCategoryService.ApiClothingCategoryGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ClothingCategory>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiClothingCategoryGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClothingCategoryGet$Plain(params?: {
  }): Observable<Array<ClothingCategory>> {

    return this.apiClothingCategoryGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ClothingCategory>>) => r.body as Array<ClothingCategory>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClothingCategoryGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClothingCategoryGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ClothingCategory>>> {

    const rb = new RequestBuilder(this.rootUrl, ClothingCategoryService.ApiClothingCategoryGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ClothingCategory>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiClothingCategoryGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClothingCategoryGet$Json(params?: {
  }): Observable<Array<ClothingCategory>> {

    return this.apiClothingCategoryGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ClothingCategory>>) => r.body as Array<ClothingCategory>)
    );
  }

  /**
   * Path part for operation apiClothingCategoryPost
   */
  static readonly ApiClothingCategoryPostPath = '/api/ClothingCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClothingCategoryPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClothingCategoryPost$Plain$Response(params?: {
    body?: ClothingCategory
  }): Observable<StrictHttpResponse<ClothingCategory>> {

    const rb = new RequestBuilder(this.rootUrl, ClothingCategoryService.ApiClothingCategoryPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ClothingCategory>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiClothingCategoryPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClothingCategoryPost$Plain(params?: {
    body?: ClothingCategory
  }): Observable<ClothingCategory> {

    return this.apiClothingCategoryPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ClothingCategory>) => r.body as ClothingCategory)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClothingCategoryPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClothingCategoryPost$Json$Response(params?: {
    body?: ClothingCategory
  }): Observable<StrictHttpResponse<ClothingCategory>> {

    const rb = new RequestBuilder(this.rootUrl, ClothingCategoryService.ApiClothingCategoryPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ClothingCategory>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiClothingCategoryPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClothingCategoryPost$Json(params?: {
    body?: ClothingCategory
  }): Observable<ClothingCategory> {

    return this.apiClothingCategoryPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ClothingCategory>) => r.body as ClothingCategory)
    );
  }

  /**
   * Path part for operation apiClothingCategoryIdGet
   */
  static readonly ApiClothingCategoryIdGetPath = '/api/ClothingCategory/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClothingCategoryIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClothingCategoryIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<ClothingCategory>> {

    const rb = new RequestBuilder(this.rootUrl, ClothingCategoryService.ApiClothingCategoryIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ClothingCategory>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiClothingCategoryIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClothingCategoryIdGet$Plain(params: {
    id: number;
  }): Observable<ClothingCategory> {

    return this.apiClothingCategoryIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ClothingCategory>) => r.body as ClothingCategory)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClothingCategoryIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClothingCategoryIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<ClothingCategory>> {

    const rb = new RequestBuilder(this.rootUrl, ClothingCategoryService.ApiClothingCategoryIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ClothingCategory>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiClothingCategoryIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClothingCategoryIdGet$Json(params: {
    id: number;
  }): Observable<ClothingCategory> {

    return this.apiClothingCategoryIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ClothingCategory>) => r.body as ClothingCategory)
    );
  }

  /**
   * Path part for operation apiClothingCategoryIdPut
   */
  static readonly ApiClothingCategoryIdPutPath = '/api/ClothingCategory/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClothingCategoryIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClothingCategoryIdPut$Response(params: {
    id: number;
    body?: ClothingCategory
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClothingCategoryService.ApiClothingCategoryIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiClothingCategoryIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClothingCategoryIdPut(params: {
    id: number;
    body?: ClothingCategory
  }): Observable<void> {

    return this.apiClothingCategoryIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiClothingCategoryIdDelete
   */
  static readonly ApiClothingCategoryIdDeletePath = '/api/ClothingCategory/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClothingCategoryIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClothingCategoryIdDelete$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<ClothingCategory>> {

    const rb = new RequestBuilder(this.rootUrl, ClothingCategoryService.ApiClothingCategoryIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ClothingCategory>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiClothingCategoryIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClothingCategoryIdDelete$Plain(params: {
    id: number;
  }): Observable<ClothingCategory> {

    return this.apiClothingCategoryIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ClothingCategory>) => r.body as ClothingCategory)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClothingCategoryIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClothingCategoryIdDelete$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<ClothingCategory>> {

    const rb = new RequestBuilder(this.rootUrl, ClothingCategoryService.ApiClothingCategoryIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ClothingCategory>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiClothingCategoryIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClothingCategoryIdDelete$Json(params: {
    id: number;
  }): Observable<ClothingCategory> {

    return this.apiClothingCategoryIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ClothingCategory>) => r.body as ClothingCategory)
    );
  }

}
