import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChannelSettings } from './dialog-channel-settings';

describe('DialogChannelSettings', () => {
  let component: DialogChannelSettings;
  let fixture: ComponentFixture<DialogChannelSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogChannelSettings],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogChannelSettings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
