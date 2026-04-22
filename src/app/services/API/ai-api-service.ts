import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '../app-config-service';
import { Video } from '../../models/video.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AiApiService {
  http = inject(HttpClient);
  config = inject(AppConfigService);

  generateTitleAI(video: Video):Observable<string> {
    return of(video.title);
    return this.http.post<string>(this.config.get.API_GENERATE_TITLE_AI, { video });
  }
}
