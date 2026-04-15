import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTimesComponent } from './step-times.component';

describe('StepTimesComponent', () => {
  let component: StepTimesComponent;
  let fixture: ComponentFixture<StepTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepTimesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StepTimesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
