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
import { ReviewFacadeService } from '../../services/Facade/review-facade-service';

@Component({
  selector: 'app-dialog-send-feedback',
  imports: [
    MatInput,
    MatInputModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
  ],
  templateUrl: './dialog-send-feedback.html',
  styleUrl: './dialog-send-feedback.scss',
})
export class DialogSendFeedback {
  private readonly reviewService = inject(ReviewFacadeService);
  readonly ls = inject(LangService);
  readonly dialogRef = inject(MatDialogRef<DialogSendFeedback>);
  onNoClick() {
    this.dialogRef.close();
  }

  async sendFeedback(feedback: string) {
    if (!feedback?.trim()) return;

    console.log(feedback);
    if (await this.reviewService.sendFeedback(feedback)) // if success
      this.dialogRef.close(); // then close the dialog
  }
}
