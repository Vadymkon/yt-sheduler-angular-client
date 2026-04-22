import { inject, Injectable } from '@angular/core';
import { AuthApiService } from '../API/auth-api-service';
import { AuthStateDomainService } from '../Domain/auth-state-domain-service';
import { CacheService } from '../cache-service';
import { AppConfigService } from '../app-config-service';
import { Video } from '../../models/video.model';
import { YoutubeApiService } from '../API/youtube-api-service';
import { Channel } from '../../models/channel.model';
import { firstValueFrom, forkJoin, map, Observable, of } from 'rxjs';
import { VideoUploadPayload } from '../../models/youtube-api-video.model';
import { ToastService } from '../toast-service';
import { LangService } from '../lang.service';

@Injectable({
  providedIn: 'root',
})
export class YoutubeFacadeService {
  private authApi = inject(AuthApiService);
  private youtubeApi = inject(YoutubeApiService);
  private readonly toast = inject(ToastService);
  private readonly ls = inject(LangService);

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

  makeVideoFromItem(item: any): Video {
    return {
      id: item.snippet?.resourceId?.videoId,
      title: item.snippet?.title ?? 'Unknown title',
      description: item.snippet?.description ?? '',
      thumbnailURL:
        (
          item.snippet?.thumbnails?.maxres?.url ??
          item.snippet?.thumbnails?.medium?.url ??
          item.snippet?.thumbnails?.default?.url
        )?.replace('http://', 'https://') ??
        'https://material.angular.dev/assets/img/examples/shiba1.jpg',
      publishStatus: item.snippet?.publishedAt
        ? new Date(item.snippet.publishedAt) > new Date()
          ? 'draft'
          : 'published'
        : 'draft',
      publishDate: item.snippet?.publishedAt ? new Date(item.snippet.publishedAt) : new Date(),
      owner: item.snippet?.channelTitle ?? 'Unknown Channel',
    };
  }
  // @ts-ignore
  makeVideosFromResponse(response): Video[] | null {
    if (!response?.items || response.items.length === 0) {
      return null;
    }
    const items = response.items;
    let videos: Video[] = [];

    for (const item of items) {
      videos.push(this.makeVideoFromItem(item));
    }
    return videos;
  }

  getVideos(channels: Channel[]): Observable<Video[]> {
    if (!channels || channels.length === 0) {
      return of([]);
    }

    const requests = channels.map((x) =>
      this.youtubeApi
        .getVideosByChannelId(x.userId, x.accessToken)
        .pipe(map((response) => this.makeVideosFromResponse(response) || [])),
    );

    // multithreading security (waitForAll)
    return forkJoin(requests).pipe(map((results) => results.flat()));
  }

  mapVideoToUploadPayload(video: Video, categoryId: string = '22'): VideoUploadPayload {
    let apiPrivacyStatus: 'private' | 'public' | 'unlisted' = 'private';

    if (video.publishStatus === 'published') {
      apiPrivacyStatus = 'public';
    } else if (video.publishStatus === 'unlisted') {
      apiPrivacyStatus = 'unlisted';
    }

    const payload: VideoUploadPayload = {
      snippet: {
        title: video.title,
        description: video.description,
        categoryId: categoryId, // '22' - People & Blogs, '27' - Education, '20' - Gaming и т.д.
      },
      status: {
        privacyStatus: apiPrivacyStatus,
      },
    };

    if (apiPrivacyStatus === 'private' && video.publishDate) {
      const now = new Date();

      if (video.publishDate > now) {
        payload.status.publishAt = video.publishDate.toISOString();
      }
    }

    return payload;
  }

  async uploadThumbnail(video: Video, accessToken: string) {
    const response = await fetch(video.thumbnailURL);
    const blob = await response.blob();

    const fileToUpload = new File([blob], 'thumbnail.jpg', { type: blob.type });

    return firstValueFrom( this.youtubeApi.updateThumbnail(video.id, fileToUpload, accessToken))
  }

  async updateVideo(video: Video, accessToken: string) {
    // if user has updated thumbnail
    if (video.thumbnailURL.includes('blob:')) {
      await this.uploadThumbnail(video, accessToken);
    }
    return firstValueFrom(
      this.youtubeApi.updateVideo(video.id, accessToken, this.mapVideoToUploadPayload(video))
    );
  }

  async updateVideos(videos: Video[], accessToken: string) {
    try {
      const requests = videos.map((video) => this.updateVideo(video, accessToken));
      // multithreading security (waitForAll)
      const result = await firstValueFrom(forkJoin(requests), { defaultValue: [] });
      this.toast.success(this.ls.t.videosUpdated);
      return result;
    } catch (error) {
      this.toast.error('');
      throw error;
      return;
    }
  }
}

