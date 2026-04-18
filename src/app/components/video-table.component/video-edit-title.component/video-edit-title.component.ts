import { Component, effect, input, signal } from '@angular/core';
import { Video } from '../../../models/video.model';
import { MatFormField, MatHint, MatInput, MatPrefix, MatSuffix } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

@Component({
  selector: 'app-video-edit-title',
  imports: [MatFormField, MatInput, FormsModule, MatBadgeModule, CdkTextareaAutosize],
  templateUrl: './video-edit-title.component.html',
  styleUrl: './video-edit-title.component.scss',
})
export class VideoEditTitleComponent {
  video = input.required<Video>();

  saveAsDraft() {
    this.video().publishStatus = 'updated';
  }
}
