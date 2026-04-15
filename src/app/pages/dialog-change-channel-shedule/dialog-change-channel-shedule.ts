import { Component, inject } from '@angular/core';
import { LangService } from '../../services/lang.service';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatInput, MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatStep, MatStepper, MatStepperModule } from '@angular/material/stepper';
import { WeekService } from '../../services/week.service';
import {MatRadioModule} from '@angular/material/radio';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import {
  MatTimepickerModule,
} from '@angular/material/timepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { StepDaysComponent } from './step1-days.component/step-days.component';
import { StepCountComponent } from './step2-count.component/step-count.component';
import { StepTimesComponent } from './step3-times.component/step-times.component';
import { SchedulePattern, WeeklyScheduleItem } from '../../models/schedule-pattern.model';
import { Channel } from '../../models/channel.model';


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
  readonly channelData = inject<Channel>(MAT_DIALOG_DATA);

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;

  ngOnInit(): void {
    this.initializeForms();
  }

  private initializeForms(): void {
    const schedule = this.channelData?.shedule?.schedule;
    const hasData = !!schedule && schedule.length > 0;

    // Data preprocess
    const initialDays = hasData
      ? schedule.map(x => x.dayOfWeek)
      : [this.weekS.weekDays[0].id];
    const initialCount = hasData
      ? schedule[0].times.length.toString()
      : '1';
    const initialPattern = hasData ? 'manual' : 'auto';
    const timeControls = hasData
      ? schedule[0].times.map(t => this._formBuilder.control(t))
      : [];

    // Init Groups
    this.firstFormGroup = this._formBuilder.group({
      dayControl: [initialDays, Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      countControl: [initialCount, [Validators.required, Validators.min(1), Validators.max(5)]]
    });
    this.thirdFormGroup = this._formBuilder.group({
      timePatternControl: [initialPattern],
      times: this._formBuilder.array(timeControls)
    });
  }

  onNoClick() {
    this.dialogRef.close();
  }

  changeShedule() {
    const schedule: SchedulePattern = {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      schedule: [],
    };
    this.firstFormGroup.value.dayControl?.forEach((dayNumber: number) => {
      const a: WeeklyScheduleItem = {
        dayOfWeek: dayNumber.toString(),
        times: ((this.thirdFormGroup.value.times as Date[]) ?? [])
      };
      schedule.schedule.push(a);
    });
    this.channelData.shedule = schedule;
    this.dialogRef.close();
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
