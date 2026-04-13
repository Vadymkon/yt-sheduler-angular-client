import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLogoComponent } from './nav-logo.component';

describe('NavLogoComponent', () => {
  let component: NavLogoComponent;
  let fixture: ComponentFixture<NavLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavLogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavLogoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
