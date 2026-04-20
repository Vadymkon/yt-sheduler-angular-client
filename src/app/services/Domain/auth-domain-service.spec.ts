import { TestBed } from '@angular/core/testing';

import { AuthDomainService } from './auth-domain-service';

describe('AuthDomainService', () => {
  let service: AuthDomainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthDomainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
