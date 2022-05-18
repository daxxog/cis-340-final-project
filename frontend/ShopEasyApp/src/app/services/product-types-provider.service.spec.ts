import { TestBed } from '@angular/core/testing';

import { ProductTypesProviderService } from './product-types-provider.service';

describe('ProductTypesProviderService', () => {
  let service: ProductTypesProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductTypesProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
