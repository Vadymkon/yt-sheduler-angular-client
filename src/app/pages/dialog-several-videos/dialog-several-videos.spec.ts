import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSeveralVideos } from './dialog-several-videos';

describe('DialogSeveralVideos', () => {
  let component: DialogSeveralVideos;
  let fixture: ComponentFixture<DialogSeveralVideos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogSeveralVideos],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogSeveralVideos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
