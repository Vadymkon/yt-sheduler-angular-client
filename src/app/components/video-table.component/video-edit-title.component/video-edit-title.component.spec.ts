import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoEditTitleComponent } from './video-edit-title.component';

describe('VideoEditTitleComponent', () => {
  let component: VideoEditTitleComponent;
  let fixture: ComponentFixture<VideoEditTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoEditTitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoEditTitleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
