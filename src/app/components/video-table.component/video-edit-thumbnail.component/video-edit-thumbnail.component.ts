import { Component, input } from '@angular/core';
import { Video } from '../../../models/video.model';
import { NgOptimizedImage } from '@angular/common';
import { MatBadge } from '@angular/material/badge';
import { MatHint } from '@angular/material/input';

@Component({
  selector: 'app-video-edit-thumbnail',
  imports: [NgOptimizedImage, MatBadge, MatHint],
  templateUrl: './video-edit-thumbnail.component.html',
  styleUrl: './video-edit-thumbnail.component.scss',
})
export class VideoEditThumbnailComponent {
  video = input.required<Video>();

  handleFiles($event: Event) {
    const input = $event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.video().publishStatus = "updated";
      this.video().thumbnailURL = URL.createObjectURL(file);
      console.log('file handled: ', this.video());
    }
  }
}
