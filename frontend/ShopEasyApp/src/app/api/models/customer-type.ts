/* tslint:disable */
/* eslint-disable */
import { Customer } from './customer';
import { ProductType } from './product-type';
export interface CustomerType {
  applySalesTax?: number;
  customers?: null | Array<Customer>;
  discountPercentage?: number;
  discountProductType?: ProductType;
  discountProductTypeId?: null | number;
  id?: number;
  name?: null | string;
}
