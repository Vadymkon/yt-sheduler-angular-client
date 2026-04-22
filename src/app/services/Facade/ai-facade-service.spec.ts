import { TestBed } from '@angular/core/testing';

import { AiFacadeService } from './ai-facade-service';

describe('AiFacadeService', () => {
  let service: AiFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AiFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
