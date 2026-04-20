import { TestBed } from '@angular/core/testing';

import { ReviewFacadeService } from './review-facade-service';

describe('ReviewFacadeService', () => {
  let service: ReviewFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
