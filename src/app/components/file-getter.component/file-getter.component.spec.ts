import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileGetterComponent } from './file-getter.component';

describe('FileGetterComponent', () => {
  let component: FileGetterComponent;
  let fixture: ComponentFixture<FileGetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileGetterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FileGetterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
