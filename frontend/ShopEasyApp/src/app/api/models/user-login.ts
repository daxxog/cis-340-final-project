/* tslint:disable */
/* eslint-disable */
import { Customer } from './customer';
export interface UserLogin {
  customer?: Customer;
  customerId?: null | number;
  isAdmin?: number;
  passwordHashed?: null | string;
  username?: null | string;
}
