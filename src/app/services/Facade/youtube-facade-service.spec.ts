import { TestBed } from '@angular/core/testing';

import { YoutubeFacadeService } from './youtube-facade-service';

describe('YoutubeFacadeService', () => {
  let service: YoutubeFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoutubeFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
