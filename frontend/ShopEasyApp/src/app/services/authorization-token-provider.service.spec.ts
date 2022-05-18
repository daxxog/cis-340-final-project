import { TestBed } from '@angular/core/testing';

import { AuthorizationTokenProviderService } from './authorization-token-provider.service';

describe('AuthorizationTokenProviderService', () => {
  let service: AuthorizationTokenProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizationTokenProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
