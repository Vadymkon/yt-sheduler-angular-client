import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoEditThumbnailComponent } from './video-edit-thumbnail.component';

describe('VideoEditThumbnailComponent', () => {
  let component: VideoEditThumbnailComponent;
  let fixture: ComponentFixture<VideoEditThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoEditThumbnailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoEditThumbnailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
