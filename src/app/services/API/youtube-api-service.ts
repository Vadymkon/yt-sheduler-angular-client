import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '../app-config-service';

@Injectable({
  providedIn: 'root',
})
export class YoutubeApiService {
  http = inject(HttpClient);
  config = inject(AppConfigService);

}
