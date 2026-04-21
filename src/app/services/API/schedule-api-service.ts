import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '../app-config-service';
import { Video } from '../../models/video.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScheduleApiService {
  http = inject(HttpClient);
  config = inject(AppConfigService);

  makeSchedule(videos: Video[]) : Observable<string[]> {
    return this.http.post<string[]>(this.config.get.API_MAKE_SCHEDULE, {videos});
  }
}
