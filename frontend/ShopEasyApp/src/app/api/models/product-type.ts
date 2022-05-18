/* tslint:disable */
/* eslint-disable */
import { CustomerType } from './customer-type';
import { Product } from './product';
export interface ProductType {
  discountCustomerTypes?: null | Array<CustomerType>;
  id?: number;
  name?: null | string;
  products?: null | Array<Product>;
}
