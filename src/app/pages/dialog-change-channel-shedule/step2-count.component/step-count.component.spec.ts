import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepCountComponent } from './step-count.component';

describe('StepCountComponent', () => {
  let component: StepCountComponent;
  let fixture: ComponentFixture<StepCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepCountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StepCountComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
