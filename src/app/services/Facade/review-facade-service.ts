import { inject, Injectable } from '@angular/core';
import { ReviewApiService } from '../API/review-api-service';
import { ToastService } from '../toast-service';
import { LangService } from '../lang.service';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewFacadeService {
  private readonly review_api = inject(ReviewApiService);
  private readonly toast = inject(ToastService);
  private readonly ls = inject(LangService);

  // DEBUG: set toast to all services
  // DEBUG: set ls to all services
  async sendFeedback(feedback: string):Promise<boolean> {
    try {
      await firstValueFrom(this.review_api.sendFeedback(feedback)); // api function
      this.toast.success(this.ls.t.feedbackIsSentSuccessfully);
      return true;
    }
    catch (e) { // error appears
      this.toast.error(this.ls.t.errorSendingFeedback);
      return false;
    }
  }
}
