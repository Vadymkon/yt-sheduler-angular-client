import { TestBed } from '@angular/core/testing';

import { ScheduleDomainService } from './schedule-domain-service';

describe('ScheduleDomainService', () => {
  let service: ScheduleDomainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleDomainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
