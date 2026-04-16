import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { WhatDeviceService } from '../../services/what-device.service';
import { MatIcon } from '@angular/material/icon';
import { FilesTemporaryService } from '../../services/files-temporary-service';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-file-dragndrop',
  imports: [MatIcon],
  templateUrl: './file-dragndrop.layout.html',
  styleUrl: './file-dragndrop.layout.scss',
})
export class FileDragndropLayout {
  readonly whatDeviceService = inject(WhatDeviceService);
  readonly fileTempService = inject(FilesTemporaryService);
  readonly ls = inject(LangService);
  isFileDraggedOver: boolean = false;

  onFileDrop($event: DragEvent) {
    $event.preventDefault();
    $event.stopPropagation();
    this.isFileDraggedOver = false;

    const files = $event.dataTransfer?.files;
    if (files) {
      // DEBUG: TO-DO: this 'filter'-logic should be in service, not here
      let onlyVideos = Array.from(files).filter(file =>
        file.type.startsWith('video/') ||
        ['.mp4', '.mov', '.avi', '.mkv'].some(ext => file.name.toLowerCase().endsWith(ext))
      );
      this.fileTempService.files = onlyVideos.map(video => video.name).join(', ');
      console.log('Files dropped:', onlyVideos);
    }
  }

  onFileDragOver($event: DragEvent) {
    $event.preventDefault();
    $event.stopPropagation();
    if (!this.isFileDraggedOver) {
      this.isFileDraggedOver = true;
    }
  }

  onFileDragLeave($event: DragEvent) {
    $event.preventDefault();
    $event.stopPropagation();
    const target = $event.currentTarget as HTMLElement;
    if (!$event.relatedTarget || !target.contains($event.relatedTarget as Node)) {
      this.isFileDraggedOver = false;
    }
  }
}
