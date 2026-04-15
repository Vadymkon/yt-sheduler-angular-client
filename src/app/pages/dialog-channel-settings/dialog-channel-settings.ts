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


@Component({
  selector: 'app-dialog-channel-settings',
  imports:  [
    MatInputModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions],
  templateUrl: './dialog-channel-settings.html',
  styleUrl: './dialog-channel-settings.scss',
})
export class DialogChannelSettings {
  readonly ls = inject(LangService);
  readonly dialog = inject(MatDialog);
  readonly dialogRef = inject(MatDialogRef<DialogChannelSettings>);
  readonly channelData = inject<Channel>(MAT_DIALOG_DATA);
  onNoClick() {
    this.dialogRef.close();
  }

  openDialogChangeSchedule() {
    this.dialog.open(DialogChangeChannelShedule, {data: this.channelData});
    this.dialogRef.close();
  }
}
