import { inject, Injectable } from '@angular/core';
import { ScheduleApiService } from '../API/schedule-api-service';
import { Video } from '../../models/video.model';
import { firstValueFrom } from 'rxjs';
import { ToastService } from '../toast-service';
import { LangService } from '../lang.service';
import { Channel } from '../../models/channel.model';
import { SchedulePattern } from '../../models/schedule-pattern.model';
import { ScheduleDomainService } from '../Domain/schedule-domain-service';

@Injectable({
  providedIn: 'root',
})
export class ScheduleFacadeService {
  private readonly scheduleAPI = inject(ScheduleApiService);
  private readonly scheduleDomain = inject(ScheduleDomainService);
  private readonly toast = inject(ToastService);
  private readonly ls = inject(LangService);

  async makeSchedule(channel:Channel, videos: Video[]) {
    try {
      const orderOfVideos: string[] = await firstValueFrom(this.scheduleAPI.makeSchedule(videos)); // api function
      // sort By Schedule
      const sortedVideos = [...videos].sort((a, b) => {
        const indexA = orderOfVideos.indexOf(a.title);
        const indexB = orderOfVideos.indexOf(b.title);
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;
        return indexA - indexB;
      });
      const scheduledVideos = this.scheduleDomain.applyScheduleToVideos(sortedVideos, channel.shedule!);
      this.toast.success(this.ls.t.scheduleIsMaden);
      return scheduledVideos;
    } catch (e) {
      // error appears
      this.toast.error(this.ls.t.errorMakingSchedule);
      return [];
    }
  }

  async makeScheduleForChannels(channels: Channel[], videos: Video[]): Promise<Video[]> {
    // List of promises for each channel
    const schedulePromises = channels.map((channel) =>
      this.makeSchedule(channel, videos)
    );

    // WaitForAll (Video[][])
    const results = await Promise.all(schedulePromises);

    // return flatten Video[]
    return results.flat();
  }
}
