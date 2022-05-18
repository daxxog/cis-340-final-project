import { TestBed } from '@angular/core/testing';

import { CustomersProviderService } from './customers-provider.service';

describe('CustomersProviderService', () => {
  let service: CustomersProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
