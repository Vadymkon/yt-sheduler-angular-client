import { Component, inject, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LangService } from '../../../services/lang.service';
import { WeekService } from '../../../services/week.service';
import { MatChipListbox, MatChipOption } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-step1-days',
  imports: [
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatChipListbox,
    MatChipOption,
    ReactiveFormsModule,
    MatRadioModule,
    MatListModule,
    MatFormFieldModule,
    MatTimepickerModule,
  ],
  templateUrl: './step-days.component.html',
  styleUrl: './step-days.component.scss',
})
export class StepDaysComponent {
  readonly ls = inject(LangService);
  readonly weekS = inject(WeekService);
  group = input.required<FormGroup>();
}
