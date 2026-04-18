import { TestBed } from '@angular/core/testing';

import { WorkspaceFacade } from './workspace-facade';

describe('WorkspaceFacade', () => {
  let service: WorkspaceFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkspaceFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
