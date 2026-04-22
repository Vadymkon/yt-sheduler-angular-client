import {
  Component,
  ContentChild,
  effect,
  ElementRef,
  input,
  signal,
  ViewChild,
} from '@angular/core';
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
  @ViewChild('textareaField') textAreaRef!: ElementRef<HTMLTextAreaElement>;
  video = input.required<Video>();

  saveAsDraft($event: Event) {
    this.video().publishStatus = 'updated';
    this.video().title = this.textAreaRef.nativeElement.value;
  }
}
