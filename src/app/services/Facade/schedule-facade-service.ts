import { inject, Injectable } from '@angular/core';
import { ScheduleApiService } from '../API/schedule-api-service';
import { Video } from '../../models/video.model';
import { firstValueFrom } from 'rxjs';
import { ToastService } from '../toast-service';
import { LangService } from '../lang.service';

@Injectable({
  providedIn: 'root',
})
export class ScheduleFacadeService {
  private readonly scheduleAPI = inject(ScheduleApiService);
  private readonly toast = inject(ToastService);
  private readonly ls = inject(LangService);

  async makeSchedule(videos: Video[]) {
    try {
      await firstValueFrom(this.scheduleAPI.makeSchedule(videos)); // api function
      this.toast.success(this.ls.t.scheduleIsMaden);
      return true;
    } catch (e) {
      // error appears
      this.toast.error(this.ls.t.errorMakingSchedule);
      return false;
    }
  }
}
