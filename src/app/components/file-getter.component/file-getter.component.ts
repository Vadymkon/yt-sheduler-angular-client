import { Component, inject, input } from '@angular/core';
import { MatInput, MatInputModule } from '@angular/material/input';
import { LangService } from '../../services/lang.service';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatButtonModule, MatIconButton } from '@angular/material/button';
import { FilesTemporaryService } from '../../services/files-temporary-service';

@Component({
  selector: 'app-file-getter',
  imports: [MatInput, MatInputModule, MatButtonModule, MatIcon, MatIconButton, MatButton],
  templateUrl: './file-getter.component.html',
  styleUrl: './file-getter.component.scss',
})
export class FileGetterComponent {
  readonly ls = inject(LangService);
  readonly fileTempService = inject(FilesTemporaryService);

  handleFiles($event: Event) {
    const target = $event.target as HTMLInputElement;
    const dragEvent = $event as DragEvent;
    const files = target.files || dragEvent.dataTransfer?.files;

    if (files?.length) this.fileTempService.files = Array.from(files).map(x=> x.name).join(', ');
  }
}
