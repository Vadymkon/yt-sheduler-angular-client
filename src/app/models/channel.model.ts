import { SchedulePattern } from './schedule-pattern.model';

export class Channel {
  title!: string;
  photoUrl?: string;
  shedule?: SchedulePattern;
  platform?: string;
}
