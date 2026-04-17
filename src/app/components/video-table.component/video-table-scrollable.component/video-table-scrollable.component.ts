import { Component, input } from '@angular/core';
import { VideoTableComponent } from '../video-table.component';
import { Video } from '../../../models/video.model';
import { CdkFixedSizeVirtualScroll, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-video-table-scrollable',
  imports: [VideoTableComponent, CdkFixedSizeVirtualScroll, CdkVirtualScrollViewport],
  templateUrl: './video-table-scrollable.component.html',
  styleUrl: './video-table-scrollable.component.scss',
})
export class VideoTableScrollableComponent {
  videos= input.required<Video[]>();
}
