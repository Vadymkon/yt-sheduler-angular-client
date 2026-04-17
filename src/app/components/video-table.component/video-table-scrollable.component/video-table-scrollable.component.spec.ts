import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTableScrollableComponent } from './video-table-scrollable.component';

describe('VideoTableScrollableComponent', () => {
  let component: VideoTableScrollableComponent;
  let fixture: ComponentFixture<VideoTableScrollableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoTableScrollableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoTableScrollableComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
