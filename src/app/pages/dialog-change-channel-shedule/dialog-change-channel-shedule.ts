import { Component, inject } from '@angular/core';
import { LangService } from '../../services/lang.service';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatInput, MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatStep, MatStepper, MatStepperModule } from '@angular/material/stepper';
import { WeekService } from '../../services/week.service';
import {MatRadioModule} from '@angular/material/radio';
import {
  FormArray,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import {
  MatTimepickerModule,
} from '@angular/material/timepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { StepDaysComponent } from './step1-days.component/step-days.component';
import { StepCountComponent } from './step2-count.component/step-count.component';
import { StepTimesComponent } from './step3-times.component/step-times.component';


@Component({
  selector: 'app-dialog-change-channel-shedule',
  imports: [
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatStepper,
    MatStep,
    ReactiveFormsModule,
    MatRadioModule,
    MatListModule,
    MatFormFieldModule,
    MatTimepickerModule,
    StepDaysComponent,
    StepCountComponent,
    StepTimesComponent,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-change-channel-shedule.html',
  styleUrl: './dialog-change-channel-shedule.scss',
})
export class DialogChangeChannelShedule {
  readonly ls = inject(LangService);
  readonly weekS = inject(WeekService);
  readonly dialogRef = inject(MatDialogRef<DialogChangeChannelShedule>);
  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    dayControl: [[this.weekS.weekDays[0].id], Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    countControl: ['1', [Validators.required, Validators.min(1), Validators.max(5)]],
  });
  thirdFormGroup = this._formBuilder.group({
    timePatternControl: ['auto'],
    times: this._formBuilder.array([]),
  });

  onNoClick() {
    this.dialogRef.close();
  }

  changeShedule() {
    console.log(this.firstFormGroup.value.dayControl);
    console.log(this.secondFormGroup.value.countControl);
    console.log(this.thirdFormGroup.value);
  }

  updateControllers() {
    let timesArr = this.thirdFormGroup.get('times') as FormArray;
    const targetCount = parseInt(this.secondFormGroup.value.countControl!);
    const defaultTime = new Date();
    defaultTime.setHours(12, 0, 0);

    while (timesArr.length < targetCount) {
      timesArr.push(this._formBuilder.control(defaultTime));
    }
    while (timesArr.length > targetCount) {
      timesArr.removeAt(timesArr.length - 1);
    }
  }

  protected readonly Array = Array;
}
