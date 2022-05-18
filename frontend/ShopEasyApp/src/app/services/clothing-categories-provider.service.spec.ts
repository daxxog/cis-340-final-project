import { TestBed } from '@angular/core/testing';

import { ClothingCategoriesProviderService } from './clothing-categories-provider.service';

describe('ClothingCategoriesProviderService', () => {
  let service: ClothingCategoriesProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClothingCategoriesProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
