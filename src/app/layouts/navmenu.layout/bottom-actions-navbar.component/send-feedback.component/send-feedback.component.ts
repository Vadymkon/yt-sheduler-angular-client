import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListItem, MatListItemIcon, MatListItemTitle } from '@angular/material/list';
import { MatDialog } from '@angular/material/dialog';
import { DialogSendFeedback } from '../../../../pages/dialog-send-feedback/dialog-send-feedback';
import { LangService } from '../../../../services/lang.service';

@Component({
  selector: 'app-send-feedback',
  imports: [MatIcon, MatListItem, MatListItemIcon, MatListItemTitle],
  templateUrl: './send-feedback.component.html',
  styleUrl: './send-feedback.component.scss',
})
export class SendFeedbackComponent {
  readonly dialog = inject(MatDialog);
  readonly ls = inject(LangService);

  openDialogFeedback() {
    const dialogRef = this.dialog.open(DialogSendFeedback);
  }
}
