import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './routes/login-page/login-page.component';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { AdminPanelComponent } from './routes/admin-panel/admin-panel.component';
import { ManageResponsiblePartiesComponent } from './routes/manage-responsible-parties/manage-responsible-parties.component';
import { ManageCustomersComponent } from './routes/manage-customers/manage-customers.component';
import { ManageProductsComponent } from './routes/manage-products/manage-products.component';
import { CartComponent } from './routes/cart/cart.component';
import { AdminViewInvoicesComponent } from './routes/admin-view-invoices/admin-view-invoices.component';
import { UserViewInvoicesComponent } from './routes/user-view-invoices/user-view-invoices.component';

import { AuthenticationGuard } from './guards/authentication.guard';
import { AdminAuthorizationGuard } from './guards/admin-authorization.guard';
import { UserAuthorizationGuard } from './guards/user-authorization.guard';


const routes: Routes = [
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: '',
        component: HomePageComponent,
        canActivate: [ AuthenticationGuard, UserAuthorizationGuard ]
    },
    {
        path: 'admin',
        component: AdminPanelComponent,
        canActivate: [ AuthenticationGuard, AdminAuthorizationGuard ]
    },
    {
        path: 'manage-responsible-parties',
        component: ManageResponsiblePartiesComponent,
        canActivate: [ AuthenticationGuard, AdminAuthorizationGuard ]
    },
    {
        path: 'manage-customers',
        component: ManageCustomersComponent,
        canActivate: [ AuthenticationGuard, AdminAuthorizationGuard ]
    },
    {
        path: 'manage-products',
        component: ManageProductsComponent,
        canActivate: [ AuthenticationGuard, AdminAuthorizationGuard ]
    },
    {
        path: 'cart',
        component: CartComponent,
        canActivate: [ AuthenticationGuard, UserAuthorizationGuard ]
    },
    {
        path: 'admin/invoices',
        component: AdminViewInvoicesComponent,
        canActivate: [ AuthenticationGuard, AdminAuthorizationGuard ]
    },
    {
        path: 'invoices',
        component: UserViewInvoicesComponent,
        canActivate: [ AuthenticationGuard, UserAuthorizationGuard ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
