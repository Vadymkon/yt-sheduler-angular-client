import { TestBed } from '@angular/core/testing';

import { AuthStateDomainService } from './auth-state-domain-service';

describe('AuthStateDomainService', () => {
  let service: AuthStateDomainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthStateDomainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
