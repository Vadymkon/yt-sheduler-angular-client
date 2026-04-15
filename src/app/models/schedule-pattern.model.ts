export interface SchedulePattern {
  timeZone: string; // "Europe/Kyiv"
  schedule: WeeklyScheduleItem[];
}

export interface WeeklyScheduleItem {
  dayOfWeek: string; // 1 (Mon) - 7 (Sun) ISO
  times: Date[];   // ["10:00", "18:00"]
}

export const templateSchedule: SchedulePattern = {
  "timeZone": "Europe/Kiev",
  "schedule": [
    {
      "dayOfWeek": "2",
      "times": [
        new Date("2026-04-15T09:00:00.863Z")
      ]
    },
    {
      "dayOfWeek": "4",
      "times": [
        new Date("2026-04-15T09:00:00.863Z")
      ]
    },
    {
      "dayOfWeek": "6",
      "times": [
        new Date("2026-04-15T09:00:00.863Z")
      ]
    }
  ]
}
