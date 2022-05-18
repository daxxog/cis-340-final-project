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

import { AdminSiteSetting } from '../models/admin-site-setting';

@Injectable({
  providedIn: 'root',
})
export class AdminSiteSettingService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAdminSiteSettingGet
   */
  static readonly ApiAdminSiteSettingGetPath = '/api/AdminSiteSetting';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminSiteSettingGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminSiteSettingGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<AdminSiteSetting>>> {

    const rb = new RequestBuilder(this.rootUrl, AdminSiteSettingService.ApiAdminSiteSettingGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AdminSiteSetting>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminSiteSettingGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminSiteSettingGet$Plain(params?: {
  }): Observable<Array<AdminSiteSetting>> {

    return this.apiAdminSiteSettingGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AdminSiteSetting>>) => r.body as Array<AdminSiteSetting>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminSiteSettingGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminSiteSettingGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<AdminSiteSetting>>> {

    const rb = new RequestBuilder(this.rootUrl, AdminSiteSettingService.ApiAdminSiteSettingGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AdminSiteSetting>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminSiteSettingGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminSiteSettingGet$Json(params?: {
  }): Observable<Array<AdminSiteSetting>> {

    return this.apiAdminSiteSettingGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AdminSiteSetting>>) => r.body as Array<AdminSiteSetting>)
    );
  }

  /**
   * Path part for operation apiAdminSiteSettingPost
   */
  static readonly ApiAdminSiteSettingPostPath = '/api/AdminSiteSetting';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminSiteSettingPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdminSiteSettingPost$Plain$Response(params?: {
    body?: AdminSiteSetting
  }): Observable<StrictHttpResponse<AdminSiteSetting>> {

    const rb = new RequestBuilder(this.rootUrl, AdminSiteSettingService.ApiAdminSiteSettingPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdminSiteSetting>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminSiteSettingPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdminSiteSettingPost$Plain(params?: {
    body?: AdminSiteSetting
  }): Observable<AdminSiteSetting> {

    return this.apiAdminSiteSettingPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AdminSiteSetting>) => r.body as AdminSiteSetting)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminSiteSettingPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdminSiteSettingPost$Json$Response(params?: {
    body?: AdminSiteSetting
  }): Observable<StrictHttpResponse<AdminSiteSetting>> {

    const rb = new RequestBuilder(this.rootUrl, AdminSiteSettingService.ApiAdminSiteSettingPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdminSiteSetting>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminSiteSettingPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdminSiteSettingPost$Json(params?: {
    body?: AdminSiteSetting
  }): Observable<AdminSiteSetting> {

    return this.apiAdminSiteSettingPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AdminSiteSetting>) => r.body as AdminSiteSetting)
    );
  }

  /**
   * Path part for operation apiAdminSiteSettingIdGet
   */
  static readonly ApiAdminSiteSettingIdGetPath = '/api/AdminSiteSetting/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminSiteSettingIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminSiteSettingIdGet$Plain$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<AdminSiteSetting>> {

    const rb = new RequestBuilder(this.rootUrl, AdminSiteSettingService.ApiAdminSiteSettingIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdminSiteSetting>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminSiteSettingIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminSiteSettingIdGet$Plain(params: {
    id: string;
  }): Observable<AdminSiteSetting> {

    return this.apiAdminSiteSettingIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AdminSiteSetting>) => r.body as AdminSiteSetting)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminSiteSettingIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminSiteSettingIdGet$Json$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<AdminSiteSetting>> {

    const rb = new RequestBuilder(this.rootUrl, AdminSiteSettingService.ApiAdminSiteSettingIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdminSiteSetting>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminSiteSettingIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminSiteSettingIdGet$Json(params: {
    id: string;
  }): Observable<AdminSiteSetting> {

    return this.apiAdminSiteSettingIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AdminSiteSetting>) => r.body as AdminSiteSetting)
    );
  }

  /**
   * Path part for operation apiAdminSiteSettingIdPut
   */
  static readonly ApiAdminSiteSettingIdPutPath = '/api/AdminSiteSetting/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminSiteSettingIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdminSiteSettingIdPut$Response(params: {
    id: string;
    body?: AdminSiteSetting
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AdminSiteSettingService.ApiAdminSiteSettingIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiAdminSiteSettingIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdminSiteSettingIdPut(params: {
    id: string;
    body?: AdminSiteSetting
  }): Observable<void> {

    return this.apiAdminSiteSettingIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminSiteSettingIdDelete
   */
  static readonly ApiAdminSiteSettingIdDeletePath = '/api/AdminSiteSetting/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminSiteSettingIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminSiteSettingIdDelete$Plain$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<AdminSiteSetting>> {

    const rb = new RequestBuilder(this.rootUrl, AdminSiteSettingService.ApiAdminSiteSettingIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdminSiteSetting>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminSiteSettingIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminSiteSettingIdDelete$Plain(params: {
    id: string;
  }): Observable<AdminSiteSetting> {

    return this.apiAdminSiteSettingIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AdminSiteSetting>) => r.body as AdminSiteSetting)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminSiteSettingIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminSiteSettingIdDelete$Json$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<AdminSiteSetting>> {

    const rb = new RequestBuilder(this.rootUrl, AdminSiteSettingService.ApiAdminSiteSettingIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdminSiteSetting>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminSiteSettingIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminSiteSettingIdDelete$Json(params: {
    id: string;
  }): Observable<AdminSiteSetting> {

    return this.apiAdminSiteSettingIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AdminSiteSetting>) => r.body as AdminSiteSetting)
    );
  }

}
