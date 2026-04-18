import { TestBed } from '@angular/core/testing';

import { ScheduleFacade } from './schedule-facade';

describe('ScheduleFacade', () => {
  let service: ScheduleFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
