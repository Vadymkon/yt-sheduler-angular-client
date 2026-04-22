import { inject, Injectable } from '@angular/core';
import { AuthApiService } from '../API/auth-api-service';
import { AuthStateDomainService } from '../Domain/auth-state-domain-service';
import { CacheService } from '../cache-service';
import { AppConfigService } from '../app-config-service';
import { Video } from '../../models/video.model';
import { YoutubeApiService } from '../API/youtube-api-service';

@Injectable({
  providedIn: 'root',
})
export class YoutubeFacadeService {
  private authApi = inject(AuthApiService);

  private youtubeApi = inject(YoutubeApiService);
  private authState = inject(AuthStateDomainService);
  config = inject(AppConfigService);
  private cache = inject(CacheService);

  redirectToGoogleAuthChannel() {
    this.authApi.redirectToGoogleAuthChannel();
  }

  // DEBUG:
  // uploadVideoDirectly(file: File, video: Video) {
  //   this.youtubeApi.uploadVideoDirectly(file);
  // }
  // updateVideo
  // getVideosByIds
  // updateThumbnail
}
