import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoEditDateComponent } from './video-edit-date.component';

describe('VideoEditDateComponent', () => {
  let component: VideoEditDateComponent;
  let fixture: ComponentFixture<VideoEditDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoEditDateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoEditDateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
