import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRightComponent } from './header-right.component';

describe('HeaderRightComponent', () => {
  let component: HeaderRightComponent;
  let fixture: ComponentFixture<HeaderRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderRightComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderRightComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
