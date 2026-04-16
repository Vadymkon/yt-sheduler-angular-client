import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDragndropLayout } from './file-dragndrop.layout';

describe('FileDragndropLayout', () => {
  let component: FileDragndropLayout;
  let fixture: ComponentFixture<FileDragndropLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileDragndropLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(FileDragndropLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
