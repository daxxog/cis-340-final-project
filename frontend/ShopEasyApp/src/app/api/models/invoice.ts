/* tslint:disable */
/* eslint-disable */
import { CustomerActivity } from './customer-activity';
export interface Invoice {
  body?: null | string;
  customerActivities?: null | Array<CustomerActivity>;
  id?: number;
  timeStamp?: number;
}
