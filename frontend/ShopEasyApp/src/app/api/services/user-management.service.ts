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

import { GetUser } from '../models/get-user';
import { NewUser } from '../models/new-user';
import { UpdateUser } from '../models/update-user';
import { UserLogin } from '../models/user-login';

@Injectable({
  providedIn: 'root',
})
export class UserManagementService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUserManagementGet
   */
  static readonly ApiUserManagementGetPath = '/api/UserManagement';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserManagementGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserManagementGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<GetUser>>> {

    const rb = new RequestBuilder(this.rootUrl, UserManagementService.ApiUserManagementGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetUser>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserManagementGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserManagementGet$Plain(params?: {
  }): Observable<Array<GetUser>> {

    return this.apiUserManagementGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GetUser>>) => r.body as Array<GetUser>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserManagementGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserManagementGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<GetUser>>> {

    const rb = new RequestBuilder(this.rootUrl, UserManagementService.ApiUserManagementGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetUser>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserManagementGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserManagementGet$Json(params?: {
  }): Observable<Array<GetUser>> {

    return this.apiUserManagementGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GetUser>>) => r.body as Array<GetUser>)
    );
  }

  /**
   * Path part for operation apiUserManagementPost
   */
  static readonly ApiUserManagementPostPath = '/api/UserManagement';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserManagementPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserManagementPost$Plain$Response(params?: {
    body?: NewUser
  }): Observable<StrictHttpResponse<GetUser>> {

    const rb = new RequestBuilder(this.rootUrl, UserManagementService.ApiUserManagementPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetUser>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserManagementPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserManagementPost$Plain(params?: {
    body?: NewUser
  }): Observable<GetUser> {

    return this.apiUserManagementPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GetUser>) => r.body as GetUser)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserManagementPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserManagementPost$Json$Response(params?: {
    body?: NewUser
  }): Observable<StrictHttpResponse<GetUser>> {

    const rb = new RequestBuilder(this.rootUrl, UserManagementService.ApiUserManagementPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetUser>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserManagementPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserManagementPost$Json(params?: {
    body?: NewUser
  }): Observable<GetUser> {

    return this.apiUserManagementPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<GetUser>) => r.body as GetUser)
    );
  }

  /**
   * Path part for operation apiUserManagementUsernameGet
   */
  static readonly ApiUserManagementUsernameGetPath = '/api/UserManagement/{username}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserManagementUsernameGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserManagementUsernameGet$Plain$Response(params: {
    username: string;
  }): Observable<StrictHttpResponse<GetUser>> {

    const rb = new RequestBuilder(this.rootUrl, UserManagementService.ApiUserManagementUsernameGetPath, 'get');
    if (params) {
      rb.path('username', params.username, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetUser>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserManagementUsernameGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserManagementUsernameGet$Plain(params: {
    username: string;
  }): Observable<GetUser> {

    return this.apiUserManagementUsernameGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GetUser>) => r.body as GetUser)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserManagementUsernameGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserManagementUsernameGet$Json$Response(params: {
    username: string;
  }): Observable<StrictHttpResponse<GetUser>> {

    const rb = new RequestBuilder(this.rootUrl, UserManagementService.ApiUserManagementUsernameGetPath, 'get');
    if (params) {
      rb.path('username', params.username, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetUser>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserManagementUsernameGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserManagementUsernameGet$Json(params: {
    username: string;
  }): Observable<GetUser> {

    return this.apiUserManagementUsernameGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<GetUser>) => r.body as GetUser)
    );
  }

  /**
   * Path part for operation apiUserManagementUsernamePut
   */
  static readonly ApiUserManagementUsernamePutPath = '/api/UserManagement/{username}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserManagementUsernamePut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserManagementUsernamePut$Response(params: {
    username: string;
    body?: UpdateUser
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserManagementService.ApiUserManagementUsernamePutPath, 'put');
    if (params) {
      rb.path('username', params.username, {});
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
   * To access the full response (for headers, for example), `apiUserManagementUsernamePut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserManagementUsernamePut(params: {
    username: string;
    body?: UpdateUser
  }): Observable<void> {

    return this.apiUserManagementUsernamePut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiUserManagementUsernameDelete
   */
  static readonly ApiUserManagementUsernameDeletePath = '/api/UserManagement/{username}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserManagementUsernameDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserManagementUsernameDelete$Plain$Response(params: {
    username: string;
  }): Observable<StrictHttpResponse<UserLogin>> {

    const rb = new RequestBuilder(this.rootUrl, UserManagementService.ApiUserManagementUsernameDeletePath, 'delete');
    if (params) {
      rb.path('username', params.username, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserLogin>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserManagementUsernameDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserManagementUsernameDelete$Plain(params: {
    username: string;
  }): Observable<UserLogin> {

    return this.apiUserManagementUsernameDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserLogin>) => r.body as UserLogin)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserManagementUsernameDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserManagementUsernameDelete$Json$Response(params: {
    username: string;
  }): Observable<StrictHttpResponse<UserLogin>> {

    const rb = new RequestBuilder(this.rootUrl, UserManagementService.ApiUserManagementUsernameDeletePath, 'delete');
    if (params) {
      rb.path('username', params.username, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserLogin>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserManagementUsernameDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserManagementUsernameDelete$Json(params: {
    username: string;
  }): Observable<UserLogin> {

    return this.apiUserManagementUsernameDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UserLogin>) => r.body as UserLogin)
    );
  }

}
