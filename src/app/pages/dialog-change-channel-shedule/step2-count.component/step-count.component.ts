import { Component, inject, input, output, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LangService } from '../../../services/lang.service';
import { MatFormField, MatInput, MatInputModule, MatLabel } from '@angular/material/input';
import { MatStep, MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatChipListbox, MatChipOption } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatTimepicker, MatTimepickerInput, MatTimepickerModule, MatTimepickerToggle } from '@angular/material/timepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StepDaysComponent } from '../step1-days.component/step-days.component';
import { StepTimesComponent } from '../step3-times.component/step-times.component';

@Component({
  selector: 'app-step2-count',
  imports: [
    MatInput,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatListModule,
    MatFormFieldModule,
    MatTimepickerModule,
  ],
  templateUrl: './step-count.component.html',
  styleUrl: './step-count.component.scss',
})
export class StepCountComponent {
  readonly ls = inject(LangService);
  group = input.required<FormGroup>();
  updateControllersEvent = output();
}
