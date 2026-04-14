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

@Component({
  selector: 'app-dialog-send-feedback',
  imports: [MatInput,
    MatInputModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions],
  templateUrl: './dialog-send-feedback.html',
  styleUrl: './dialog-send-feedback.scss',
})
export class DialogSendFeedback {
  readonly ls = inject(LangService);
  readonly dialogRef = inject(MatDialogRef<DialogSendFeedback>);
  onNoClick() {
    this.dialogRef.close();
  }

  sendFeedback(feedback: string) {
    console.log(feedback);
    this.dialogRef.close();
  }
}
