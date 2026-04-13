import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomActionsNavbarComponent } from './bottom-actions-navbar.component';

describe('BottomActionsNavbarComponent', () => {
  let component: BottomActionsNavbarComponent;
  let fixture: ComponentFixture<BottomActionsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomActionsNavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BottomActionsNavbarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
