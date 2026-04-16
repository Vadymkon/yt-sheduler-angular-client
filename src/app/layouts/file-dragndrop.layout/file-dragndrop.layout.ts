import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { WhatDeviceService } from '../../services/what-device.service';
import { MatIcon } from '@angular/material/icon';
import { FilesTemporaryService } from '../../services/files-temporary-service';

@Component({
  selector: 'app-file-dragndrop',
  imports: [MatIcon],
  templateUrl: './file-dragndrop.layout.html',
  styleUrl: './file-dragndrop.layout.scss',
})
export class FileDragndropLayout {
  readonly whatDeviceService = inject(WhatDeviceService);
  readonly fileTempService = inject(FilesTemporaryService);
  isFileDraggedOver: boolean = false;

  onFileDrop($event: DragEvent) {
    $event.preventDefault();
    $event.stopPropagation();
    this.isFileDraggedOver = false;

    const files = $event.dataTransfer?.files;
    if (files) {
      this.fileTempService.files = Array.from(files).map(x=> x.name).join(', ');
      console.log('Files dropped:', files);
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
