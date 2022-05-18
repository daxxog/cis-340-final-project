/* tslint:disable */
/* eslint-disable */
import { ClothingCategory } from './clothing-category';
import { CustomerActivity } from './customer-activity';
import { ProductType } from './product-type';
export interface Product {
  clothingCategory?: ClothingCategory;
  clothingCategoryId?: null | number;
  customerActivities?: null | Array<CustomerActivity>;
  description?: null | string;
  id?: number;
  name?: null | string;
  priceCents?: number;
  productType?: ProductType;
  productTypeId?: number;
}
