import { TestBed } from '@angular/core/testing';

import { CustomerTypesProviderService } from './customer-types-provider.service';

describe('CustomerTypesProviderService', () => {
  let service: CustomerTypesProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerTypesProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
