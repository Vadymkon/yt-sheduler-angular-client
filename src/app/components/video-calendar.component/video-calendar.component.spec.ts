import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCalendarComponent } from './video-calendar.component';

describe('VideoCalendarComponent', () => {
  let component: VideoCalendarComponent;
  let fixture: ComponentFixture<VideoCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoCalendarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoCalendarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
