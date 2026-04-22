import { Injectable } from '@angular/core';
import { Video } from '../../models/video.model';
import { SchedulePattern } from '../../models/schedule-pattern.model';

@Injectable({
  providedIn: 'root',
})
export class ScheduleDomainService {

  applyScheduleToVideos(videos: Video[], pattern: SchedulePattern): Video[] {
    // Flatten schedule pattern
    const slots = pattern.schedule
      .flatMap(p => p.times.map(t => {
        const d = new Date(t);
        return Number(p.dayOfWeek) * 1440 + d.getHours() * 60 + d.getMinutes();
      }))
      .sort((a, b) => a - b);

    if (!slots.length) return videos;

    let refDate = new Date(); // Точка отсчета (сегодня)

    return videos.map(video => {
      // Current moment of time into seconds
      const currentMin = refDate.getDay() * 1440 + refDate.getHours() * 60 + refDate.getMinutes();
      // find next slot
      let nextSlot = slots.find(s => s > currentMin);
      let weeksToAdd = 0;
      // if there's no next slot, get another week
      if (nextSlot === undefined) {
        nextSlot = slots[0];
        weeksToAdd = 1;
      }

      // set datetime
      const dayDiff = Math.floor(nextSlot / 1440) - refDate.getDay() + (weeksToAdd * 7);
      refDate = new Date(refDate); // Clone to prevent changing the object
      refDate.setDate(refDate.getDate() + dayDiff);
      refDate.setHours(Math.floor((nextSlot % 1440) / 60), nextSlot % 60, 0, 0);

      // Return updated video
      return { ...video, publishDate: refDate, publishStatus: 'updated' };
    });
  }
}
