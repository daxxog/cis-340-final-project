import { TestBed } from '@angular/core/testing';

import { ResponsiblePartyProviderService } from './responsible-party-provider.service';

describe('ResponsiblePartyProviderService', () => {
  let service: ResponsiblePartyProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsiblePartyProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
