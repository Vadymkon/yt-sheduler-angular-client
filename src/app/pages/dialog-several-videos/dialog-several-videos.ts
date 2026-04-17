import { Component, inject } from '@angular/core';
import { LangService } from '../../services/lang.service';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { VideoTableComponent } from '../../components/video-table.component/video-table.component';
import { Video } from '../../models/video.model';

@Component({
  selector: 'app-dialog-several-videos',
  imports: [
    MatButton,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    VideoTableComponent,
  ],
  templateUrl: './dialog-several-videos.html',
  styleUrl: './dialog-several-videos.scss',
})
export class DialogSeveralVideos {
  readonly ls = inject(LangService);
  readonly dialogRef = inject(MatDialogRef<DialogSeveralVideos>);
  readonly videosData = inject<Video[]>(MAT_DIALOG_DATA);
  onNoClick() {
    this.dialogRef.close();
  }
}
