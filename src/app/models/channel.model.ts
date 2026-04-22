import { SchedulePattern } from './schedule-pattern.model';

export class Channel {
  userId?: string;
  title!: string;
  photoUrl?: string;
  shedule?: SchedulePattern;
  platform?: string;
  accessToken?: string;
  selected?: boolean;
}
