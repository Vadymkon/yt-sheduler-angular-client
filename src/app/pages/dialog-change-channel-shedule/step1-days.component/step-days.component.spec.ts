import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepDaysComponent } from './step-days.component';

describe('StepDaysComponent', () => {
  let component: StepDaysComponent;
  let fixture: ComponentFixture<StepDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepDaysComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StepDaysComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
