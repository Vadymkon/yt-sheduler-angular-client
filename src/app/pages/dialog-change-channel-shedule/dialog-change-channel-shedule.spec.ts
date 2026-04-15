import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChangeChannelShedule } from './dialog-change-channel-shedule';

describe('DialogChangeChannelShedule', () => {
  let component: DialogChangeChannelShedule;
  let fixture: ComponentFixture<DialogChangeChannelShedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogChangeChannelShedule],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogChangeChannelShedule);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
