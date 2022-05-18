import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiModule } from './api/api.module';

import { AuthInterceptor } from './http-interceptors/auth-interceptor';
import { AuthorizationTokenProviderService } from './services/authorization-token-provider.service';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import { CustomerTypesProviderService } from './services/customer-types-provider.service';
import { ResponsiblePartyProviderService } from './services/responsible-party-provider.service';
import { UsersProviderService } from './services/users-provider.service';
import { CustomersProviderService } from './services/customers-provider.service';
import { ProductsProviderService } from './services/products-provider.service';
import { ProductTypesProviderService } from './services/product-types-provider.service';
import { ClothingCategoriesProviderService } from './services/clothing-categories-provider.service';
import { ShopService } from './services/shop.service';
import { UtilService } from './services/util.service';
import { CartService } from './services/cart.service';

import { LoginPageComponent } from './routes/login-page/login-page.component';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { AdminPanelComponent } from './routes/admin-panel/admin-panel.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AdminToolbarComponent } from './components/admin-toolbar/admin-toolbar.component';
import { HomeButtonComponent } from './components/home-button/home-button.component';
import { ManageResponsiblePartiesComponent } from './routes/manage-responsible-parties/manage-responsible-parties.component';
import { ManageResponsiblePartyComponent } from './routes/manage-responsible-parties/manage-responsible-party/manage-responsible-party.component';
import { ManageCustomersComponent } from './routes/manage-customers/manage-customers.component';
import { CustomerTypeSelectorComponent } from './routes/manage-customers/customer-type-selector/customer-type-selector.component';
import { ResponsiblePartySelectorComponent } from './routes/manage-customers/responsible-party-selector/responsible-party-selector.component';
import { ManageCustomerComponent } from './routes/manage-customers/manage-customer/manage-customer.component';
import { ManageCustomerUsernameInputComponent } from './routes/manage-customers/manage-customer-username-input/manage-customer-username-input.component';
import { ManageCustomerResetPasswordButtonComponent } from './routes/manage-customers/manage-customer/manage-customer-reset-password-button/manage-customer-reset-password-button.component';
import { ManageCustomerDeleteButtonComponent } from './routes/manage-customers/manage-customer/manage-customer-delete-button/manage-customer-delete-button.component';
import { ManageProductsComponent } from './routes/manage-products/manage-products.component';
import { ManageProductComponent } from './routes/manage-products/manage-product/manage-product.component';
import { ProductTypeSelectorComponent } from './routes/manage-products/product-type-selector/product-type-selector.component';
import { ClothingCategorySelectorComponent } from './routes/manage-products/clothing-category-selector/clothing-category-selector.component';
import { ManageProductPriceInputComponent } from './routes/manage-products/manage-product-price-input/manage-product-price-input.component';
import { ManageProductDeleteButtonComponent } from './routes/manage-products/manage-product/manage-product-delete-button/manage-product-delete-button.component';
import { UserToolbarComponent } from './components/user-toolbar/user-toolbar.component';
import { DisplayProductComponent } from './routes/home-page/display-product/display-product.component';
import { AddToCartButtonComponent } from './routes/home-page/display-product/add-to-cart-button/add-to-cart-button.component';
import { CartComponent } from './routes/cart/cart.component';
import { DisplayCartItemComponent } from './routes/cart/display-cart-item/display-cart-item.component';
import { CartButtonComponent } from './components/cart-button/cart-button.component';
import { AdminViewInvoicesComponent } from './routes/admin-view-invoices/admin-view-invoices.component';
import { UserViewInvoicesComponent } from './routes/user-view-invoices/user-view-invoices.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        HomePageComponent,
        AdminPanelComponent,
        LogoutButtonComponent,
        AdminToolbarComponent,
        HomeButtonComponent,
        ManageResponsiblePartiesComponent,
        ManageResponsiblePartyComponent,
        ManageCustomersComponent,
        CustomerTypeSelectorComponent,
        ResponsiblePartySelectorComponent,
        ManageCustomerComponent,
        ManageCustomerUsernameInputComponent,
        ManageCustomerResetPasswordButtonComponent,
        ManageCustomerDeleteButtonComponent,
        ManageProductsComponent,
        ManageProductComponent,
        ProductTypeSelectorComponent,
        ClothingCategorySelectorComponent,
        ManageProductPriceInputComponent,
        ManageProductDeleteButtonComponent,
        UserToolbarComponent,
        DisplayProductComponent,
        AddToCartButtonComponent,
        CartComponent,
        DisplayCartItemComponent,
        CartButtonComponent,
        AdminViewInvoicesComponent,
        UserViewInvoicesComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MatInputModule,
        MatDatepickerModule,
        HttpClientModule,
        ApiModule.forRoot({rootUrl: "https://localhost:5001"})
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        AuthorizationTokenProviderService,
        LoginService,
        UserService,
        CustomerTypesProviderService,
        ResponsiblePartyProviderService,
        UsersProviderService,
        CustomersProviderService,
        ProductsProviderService,
        ProductTypesProviderService,
        ClothingCategoriesProviderService,
        ShopService,
        UtilService,
        CartService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
