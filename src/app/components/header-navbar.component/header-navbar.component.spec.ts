import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavbarComponent } from './header-navbar.component';

describe('HeaderNavbarComponent', () => {
  let component: HeaderNavbarComponent;
  let fixture: ComponentFixture<HeaderNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderNavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderNavbarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
