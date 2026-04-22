import { inject, Injectable } from '@angular/core';
import { AuthApiService } from '../API/auth-api-service';
import { AuthStateDomainService } from '../Domain/auth-state-domain-service';
import { CacheService } from '../cache-service';
import { AppConfigService } from '../app-config-service';
import { Video } from '../../models/video.model';
import { YoutubeApiService } from '../API/youtube-api-service';
import { Channel } from '../../models/channel.model';
import { firstValueFrom, forkJoin, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YoutubeFacadeService {
  private authApi = inject(AuthApiService);
  private youtubeApi = inject(YoutubeApiService);

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



  // @ts-ignore
  makeVideosFromResponse(response):Video[] | null {
    if (!response?.items || response.items.length === 0) {
      return null;
    }
    const items = response.items;
    let videos: Video[] = [];

    for (const item of items) {
      let rawThumbUrl = item.snippet?.thumbnails?.medium?.url
        ?? item.snippet?.thumbnails?.default?.url;
      if (rawThumbUrl && rawThumbUrl.startsWith('http://')) {
        rawThumbUrl = rawThumbUrl.replace('http://', 'https://');
      }
      const videoId = typeof item.id === 'object' ? item.id.videoId : item.id;

      const video: Video = {
        id: videoId,
        title: item.snippet?.title ?? 'Без названия',
        description: item.snippet?.description ?? '',
        thumbnailURL: rawThumbUrl ?? 'assets/images/default-thumbnail.jpg', // Заглушка, если картинки нет
        publishStatus: item.status?.privacyStatus ?? 'unknown',
        publishDate: new Date(item.snippet?.publishedAt),
        owner: item.snippet?.channelTitle ?? 'Unknown Channel',
      };
      videos.push(video);
    }
    return videos;
  }

  getVideos(channels: Channel[]): Observable<Video[]> {
    if (!channels || channels.length === 0) {
      return of([]);
    }

    const requests = channels.map(x =>
      this.youtubeApi.getVideosByChannelId(x.userId, x.accessToken).pipe(
        map(response => this.makeVideosFromResponse(response) || [])
      )
    );

    // multithreading security (waitForAll)
    return forkJoin(requests).pipe(
      map(results => results.flat())
    );
  }
}
