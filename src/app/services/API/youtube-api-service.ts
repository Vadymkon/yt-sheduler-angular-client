import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfigService } from '../app-config-service';
import { VideoUploadPayload } from '../../models/youtube-api-video.model';
import { firstValueFrom } from 'rxjs';

// DEBUG: review this class. Maybe make return http and process it in Facade

@Injectable({
  providedIn: 'root',
})
export class YoutubeApiService {
  http = inject(HttpClient);
  config = inject(AppConfigService);

  // ---------------------------------------------------------
  // UPLOAD VIDEO (Metadata: Title, Description, Status)
  // ---------------------------------------------------------
  async uploadVideoDirectly(file: File, token: string, payload: VideoUploadPayload): Promise<string> {
    const initHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json; charset=UTF-8',
      'X-Upload-Content-Length': file.size.toString(),
      'X-Upload-Content-Type': file.type
    });

    const initResponse = await firstValueFrom(
      this.http.post(this.config.get.YOUTUBE_API_UPLOAD_VIDEO, payload, {
        headers: initHeaders,
        observe: 'response'
      })
    );

    const uploadUrl = initResponse.headers.get('Location');
    if (!uploadUrl) {
      throw new Error('Failed to get upload URL from Location header');
    }

    const uploadHeaders = new HttpHeaders({
      'Content-Type': file.type,
      'Content-Length': file.size.toString()
    });

    const uploadResult = await firstValueFrom(
      this.http.put<any>(uploadUrl, file, {
        headers: uploadHeaders
      })
    );

    return uploadResult.id;
  }

  // ---------------------------------------------------------
  // UPDATE VIDEO (Metadata: Title, Description, Status)
  // ---------------------------------------------------------
  async updateVideo(videoId: string, token: string, payload: VideoUploadPayload): Promise<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    const updateBody = {
      id: videoId,
      ...payload
    };

    const updateResult = await firstValueFrom(
      this.http.put<any>(this.config.get.YOUTUBE_API_UPDATE_VIDEO, updateBody, { headers })
    );

    return updateResult; // Returns the updated video object
  }

  // ---------------------------------------------------------
  // GET A LIST OF VIDEOS BY ID
  // ---------------------------------------------------------
  async getVideosByIds(videoIds: string[], token: string): Promise<any[]> {
    if (!videoIds || videoIds.length === 0) {
      return [];
    }

    const idsString = videoIds.join(',');
    const url = `${this.config.get.YOUTUBE_API_GET_VIDEOS_INFO}${idsString}`;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json'
    });

    const response = await firstValueFrom(
      this.http.get<any>(url, { headers })
    );

    return response.items || [];
  }

  // ---------------------------------------------------------
  // UPLOAD CUSTOM THUMBNAIL
  // ---------------------------------------------------------
  async updateThumbnail(videoId: string, file: File, token: string): Promise<any> {
    const url = `${this.config.get.YOUTUBE_API_SET_THUMBNAIL}?videoId=${videoId}`;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': file.type
    });

    const response = await firstValueFrom(
      this.http.post<any>(url, file, { headers })
    );

    return response;
  }
}
