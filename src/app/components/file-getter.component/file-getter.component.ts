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
import { ScheduleFacadeService } from '../../services/Facade/schedule-facade-service';
import { AiFacadeService } from '../../services/Facade/ai-facade-service';

@Component({
  selector: 'app-file-getter',
  imports: [MatInput, MatInputModule, MatButtonModule, MatIcon, MatIconButton, MatButton],
  templateUrl: './file-getter.component.html',
  styleUrl: './file-getter.component.scss',
})
export class FileGetterComponent {
  readonly ls = inject(LangService);
  readonly workspaceService = inject(WorkspaceFacadeService);
  readonly youtubeService = inject(YoutubeFacadeService);
  readonly scheduleService = inject(ScheduleFacadeService);
  readonly aiService = inject(AiFacadeService);

  async handleFiles($event: Event) {
    const target = $event.target as HTMLInputElement;
    const dragEvent = $event as DragEvent;
    const files = target.files || dragEvent.dataTransfer?.files;
    const selectedChannels: Channel[] = this.workspaceService
      .channels()
      .filter((channel) => channel.selected);

    if (files?.length) {
      this.workspaceService.files = Array.from(files);
      this.workspaceService.fileLabels = Array.from(files)
        .map((x) => x.name)
        .join(', ');
      const scheduledVideos = await this.scheduleService.makeScheduleForChannels(
        selectedChannels,
        this.workspaceService.createVideosFromFiles(Array.from(files)),
      );
      const videosWithTitle = await this.aiService.replaceVideosTitle(scheduledVideos);
      this.workspaceService.videos.update((currentVideos) => [
        ...videosWithTitle,
        ...currentVideos,
      ]);
    }
  }

  async uploadChanges() {
    const videosToPublish = this.workspaceService
      .videos()
      .filter((video) => video.publishStatus == 'unpublished');
    const videosToUpdate = this.workspaceService
      .videos()
      .filter((video) => video.publishStatus == 'updated');

    let channelAccessKey = this.workspaceService
      .channels() // get AccessKey
      .find((channel: Channel) =>
        videosToUpdate.map((x) => x.owner).includes(channel.title),
      )?.accessToken;
    if (!channelAccessKey)
      // if no accessCode
      channelAccessKey = this.workspaceService.channels().filter((c) => c.selected)[0].accessToken;

    if (channelAccessKey) {
      // try to upload
      let resultPublished = await this.youtubeService
        .uploadVideos(videosToPublish, channelAccessKey)
        // if not try to update
        .then(async (y) => {
          let resultUpdated = await this.youtubeService
            .updateVideos(videosToUpdate, channelAccessKey)
            // only then refresh videos
            .then((x) => {
              // update videos
              this.refreshVideos();
            });
        });
    }
  }

  async refreshVideos() {
    const freshVideos = await firstValueFrom(
      this.youtubeService.getVideos(
        this.workspaceService.channels().filter((channel) => channel.selected),
      ),
    );

    this.workspaceService.videos.set(freshVideos);
  }
}
