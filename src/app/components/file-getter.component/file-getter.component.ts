import { Component, computed, inject, input } from '@angular/core';
import { MatInput, MatInputModule } from '@angular/material/input';
import { LangService } from '../../services/lang.service';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatButtonModule, MatIconButton } from '@angular/material/button';
import { WorkspaceFacadeService } from '../../services/Facade/workspace-facade-service';
import { Channel } from '../../models/channel.model';
import { YoutubeFacadeService } from '../../services/Facade/youtube-facade-service';
import { firstValueFrom } from 'rxjs';
import { Video } from '../../models/video.model';

@Component({
  selector: 'app-file-getter',
  imports: [MatInput, MatInputModule, MatButtonModule, MatIcon, MatIconButton, MatButton],
  templateUrl: './file-getter.component.html',
  styleUrl: './file-getter.component.scss',
})
export class FileGetterComponent {
  readonly ls = inject(LangService);
  readonly workspaceService = inject(WorkspaceFacadeService);
  protected readonly youtubeService = inject(YoutubeFacadeService);


  handleFiles($event: Event) {
    const target = $event.target as HTMLInputElement;
    const dragEvent = $event as DragEvent;
    const files = target.files || dragEvent.dataTransfer?.files;

    if (files?.length) {
      this.workspaceService.files = Array.from(files);
      this.workspaceService.fileLabels = Array.from(files).map((x) => x.name).join(', ');
    }
  }

  async uploadChanges() {
    const videos = this.workspaceService
      .videos()
      .filter((video) => video.publishStatus == 'updated');
    const channelAccessKey = this.workspaceService
      .channels()
      .find((channel: Channel) => videos.map((x) => x.owner).includes(channel.title))?.accessToken;
    if (channelAccessKey) {
      let result = await this.youtubeService.updateVideos(videos, channelAccessKey).then(x => {
        // update videos
        this.refreshVideos();
      });
    }
  }

  async refreshVideos() {
    const freshVideos = await firstValueFrom(
      this.youtubeService.getVideos(
        this.workspaceService.channels().filter(channel => channel.selected)
      )
    );

    this.workspaceService.videos.set(freshVideos);
  }
}
