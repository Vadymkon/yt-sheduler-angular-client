export interface SchedulePattern {
  timeZone: string; // "Europe/Kyiv"
  schedule: WeeklyScheduleItem[];
}

export interface WeeklyScheduleItem {
  dayOfWeek: string; // 1 (Mon) - 7 (Sun) ISO
  times: Date[];   // ["10:00", "18:00"]
}
