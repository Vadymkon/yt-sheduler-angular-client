import { TestBed } from '@angular/core/testing';

import { FilesTemporaryService } from './files-temporary-service';

describe('FilesTemporaryService', () => {
  let service: FilesTemporaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilesTemporaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
