import { TestBed } from '@angular/core/testing';

import { UsersProviderService } from './users-provider.service';

describe('UsersProviderService', () => {
  let service: UsersProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
