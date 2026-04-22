import { inject, Injectable } from '@angular/core';
import { ReviewApiService } from '../API/review-api-service';
import { ToastService } from '../toast-service';
import { LangService } from '../lang.service';
import { firstValueFrom } from 'rxjs';
import { AiApiService } from '../API/ai-api-service';
import { Video } from '../../models/video.model';

@Injectable({
  providedIn: 'root',
})
export class AiFacadeService {
  private readonly ai_api = inject(AiApiService);
  private readonly toast = inject(ToastService);
  private readonly ls = inject(LangService);

  // DEBUG: set toast to all services
  // DEBUG: set ls to all services
  async generateTitleAI(video: Video) {
    try {
      const title = await firstValueFrom(this.ai_api.generateTitleAI(video)); // api function
      this.toast.success(this.ls.t.titleIsGenerated);
      return title;
    } catch (e) {
      // error appears
      this.toast.error(this.ls.t.errorGeneratingTitle);
      return video.title;
    }
  }

  async replaceVideoTitle(video: Video) {
    const title = await this.generateTitleAI(video);
    video.title = title;
    return video;
  }

  async replaceVideosTitle(videos: Video[]) {
    // List of Promises
    const videoPromises = videos.map((video) => this.replaceVideoTitle(video));
    // WaitForAll
    return await Promise.all(videoPromises);
  }
}
