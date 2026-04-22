import { Component, input } from '@angular/core';
import { Video } from '../../../models/video.model';
import { DatePipe } from '@angular/common';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButton, MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  MatTimepicker,
  MatTimepickerInput,
  MatTimepickerToggle,
} from '@angular/material/timepicker';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerInputEvent,
  MatDatepickerToggle
} from '@angular/material/datepicker';

@Component({
  selector: 'app-video-edit-date',
  imports: [
    MatInputModule,
    MatButtonModule,
    MatTimepicker,
    MatTimepickerInput,
    MatTimepickerToggle,
    ReactiveFormsModule,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
  ],
  templateUrl: './video-edit-date.component.html',
  styleUrl: './video-edit-date.component.scss',
})
export class VideoEditDateComponent {
  video = input.required<Video>();

  handleNewDate($event: MatDatepickerInputEvent<any, any>) {
    if (!this.video().file) // if it is unpublished one, then it should not be remarked
      this.video().publishStatus = "updated";
    this.video().publishDate.setDate($event.value.getDate());
  }

  handleNewTime($event: Date) {
    if (!this.video().file) // if it is unpublished one, then it should not be remarked
      this.video().publishStatus = "updated";
    this.video().publishDate.setTime($event.getTime());
  }
}
