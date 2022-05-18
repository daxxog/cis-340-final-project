/* tslint:disable */
/* eslint-disable */
import { Customer } from './customer';
import { Invoice } from './invoice';
import { Product } from './product';
export interface CustomerActivity {
  customer?: Customer;
  customerId?: number;
  howMany?: number;
  id?: number;
  invoice?: Invoice;
  invoiceId?: number;
  product?: Product;
  productId?: number;
}
