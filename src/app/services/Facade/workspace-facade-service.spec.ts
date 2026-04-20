import { TestBed } from '@angular/core/testing';

import { WorkspaceFacadeService } from './workspace-facade-service';

describe('WorkspaceFacadeService', () => {
  let service: WorkspaceFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkspaceFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
