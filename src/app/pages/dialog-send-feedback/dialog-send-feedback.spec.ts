import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSendFeedback } from './dialog-send-feedback';

describe('DialogSendFeedback', () => {
  let component: DialogSendFeedback;
  let fixture: ComponentFixture<DialogSendFeedback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogSendFeedback],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogSendFeedback);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
