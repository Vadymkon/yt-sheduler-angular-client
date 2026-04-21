import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfigService } from '../app-config-service';

@Injectable({
  providedIn: 'root',
})
export class ReviewApiService {
  http = inject(HttpClient);
  config = inject(AppConfigService);

  sendFeedback(feedback: string) {
    return this.http.post(this.config.get.API_SEND_FEEDBACK, { feedback });
  }
}
