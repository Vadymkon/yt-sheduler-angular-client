import { inject, Injectable, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class WhatDeviceService {
  private breakpointObserver = inject(BreakpointObserver);

  public isPhone = signal(false);

  constructor() {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isPhone.set(result.matches);
    });
  }
}
