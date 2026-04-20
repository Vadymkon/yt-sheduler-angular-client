import { TestBed } from '@angular/core/testing';

import { ScheduleFacadeService } from './schedule-facade-service';

describe('ScheduleFacadeService', () => {
  let service: ScheduleFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
