import { Component, inject, input } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormField, MatInput, MatInputModule, MatSuffix } from '@angular/material/input';
import { MatRadioButton, MatRadioGroup, MatRadioModule } from '@angular/material/radio';
import { MatStep, MatStepLabel, MatStepper, MatStepperModule, MatStepperPrevious } from '@angular/material/stepper';
import { MatTimepicker, MatTimepickerInput, MatTimepickerModule, MatTimepickerToggle } from '@angular/material/timepicker';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LangService } from '../../../services/lang.service';
import { MatDialogActions, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatChipListbox, MatChipOption } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StepDaysComponent } from '../step1-days.component/step-days.component';
import { StepCountComponent } from '../step2-count.component/step-count.component';

@Component({
  selector: 'app-step3-times',
  imports: [
    MatInput,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatListModule,
    MatTimepickerToggle,
    MatTimepicker,
    MatTimepickerInput,
    MatFormFieldModule,
    MatTimepickerModule,
  ],
  templateUrl: './step-times.component.html',
  styleUrl: './step-times.component.scss',
})
export class StepTimesComponent {
  readonly ls = inject(LangService);
  group = input.required<FormGroup>();

  get timesControls() {
    return (this.group().get('times') as FormArray).controls;
  }
}
