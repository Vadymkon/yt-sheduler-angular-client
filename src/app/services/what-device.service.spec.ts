import { TestBed } from '@angular/core/testing';

import { WhatDeviceService } from './what-device.service';

describe('WhatDeviceService', () => {
  let service: WhatDeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhatDeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
