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
import { DialogChangeChannelShedule } from '../dialog-change-channel-shedule/dialog-change-channel-shedule';
import { Channel } from '../../models/channel.model';
import { templateSchedule } from '../../models/schedule-pattern.model';
import { WeekService } from '../../services/week.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-dialog-channel-settings',
  imports: [
    MatInputModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
  ],
  templateUrl: './dialog-channel-settings.html',
  styleUrl: './dialog-channel-settings.scss',
})
export class DialogChannelSettings {
  readonly ls = inject(LangService);
  readonly dialog = inject(MatDialog);
  readonly dialogRef = inject(MatDialogRef<DialogChannelSettings>);
  readonly channelData = inject<Channel>(MAT_DIALOG_DATA);
  readonly weekS = inject(WeekService);

  ngOnInit(): void {
    if (!this.channelData.shedule)
      this.channelData.shedule = templateSchedule;
  }

  formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString('uk-UA', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  onNoClick() {
    this.dialogRef.close();
  }

  openDialogChangeSchedule() {
    this.dialog.open(DialogChangeChannelShedule, { data: this.channelData });
    this.dialogRef.close();
  }

  protected readonly parseInt = parseInt;
}
