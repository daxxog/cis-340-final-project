/* tslint:disable */
/* eslint-disable */
import { CustomerActivity } from './customer-activity';
import { CustomerType } from './customer-type';
import { ResponsibleParty } from './responsible-party';
import { UserLogin } from './user-login';
export interface Customer {
  customerActivities?: null | Array<CustomerActivity>;
  customerType?: CustomerType;
  customerTypeId?: number;
  emailAddress?: null | string;
  firstName?: null | string;
  id?: number;
  lastName?: null | string;
  phoneNumber?: null | string;
  responsibleParty?: ResponsibleParty;
  responsiblePartyId?: number;
  userLogins?: null | Array<UserLogin>;
}
