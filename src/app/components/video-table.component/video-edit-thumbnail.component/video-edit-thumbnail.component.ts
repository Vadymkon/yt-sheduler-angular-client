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
    this.video().publishStatus = "updated";
    console.log('file handled: ', $event);
  }
}
