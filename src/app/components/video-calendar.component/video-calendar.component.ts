import {
  Component,
  computed,
  inject,
  input,
  signal,
  Signal,
  untracked,
  viewChildren,
  WritableSignal,
} from '@angular/core';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MatDateFormats,
  provideNativeDateAdapter,
} from '@angular/material/core';
import {Grid, GridRow, GridCell, GridCellWidget} from '@angular/aria/grid';
import { Video } from '../../models/video.model';

const DAYS_PER_WEEK = 7;

interface CalendarCell<D = any> {
  displayName: string;
  ariaLabel: string;
  date: D;
  selected: WritableSignal<boolean>;
  day: number;
}

@Component({
  selector: 'app-video-calendar',
  imports: [Grid, GridRow, GridCell, GridCellWidget],
  templateUrl: './video-calendar.component.html',
  styleUrl: './video-calendar.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class VideoCalendarComponent<D> {
  videos = input.required<Video[]>();
  private readonly _dayButtons = viewChildren(GridCellWidget);
  private readonly _dateAdapter = inject<DateAdapter<D>>(DateAdapter, {optional: true})!;
  private readonly _dateFormats = inject<MatDateFormats>(MAT_DATE_FORMATS, {optional: true})!;

  private readonly _firstWeekOffset = computed(() => {
    const firstDayOfMonth = this._dateAdapter.createDate(
      this._dateAdapter.getYear(this.viewMonth()),
      this._dateAdapter.getMonth(this.viewMonth()),
      1,
    );
    return (
      (DAYS_PER_WEEK +
        this._dateAdapter.getDayOfWeek(firstDayOfMonth) -
        this._dateAdapter.getFirstDayOfWeek()) %
      DAYS_PER_WEEK
    );
  });

  protected readonly monthYearLabel = computed(() =>
    this._dateAdapter
      .format(this.viewMonth(), this._dateFormats.display.monthYearLabel)
      .toLocaleUpperCase(),
  );

  protected readonly daysFromPrevMonth: Signal<number[]> = computed(() => {
    const prevMonthNumDays = this._dateAdapter.getNumDaysInMonth(
      this._dateAdapter.addCalendarMonths(this.viewMonth(), -1),
    );
    const days: number[] = [];
    for (let i = this._firstWeekOffset() - 1; i >= 0; i--) {
      days.push(prevMonthNumDays - i);
    }
    return days;
  });

  readonly weekdays: Signal<{long: string; narrow: string}[]> = computed(() => {
    const firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();
    const narrowWeekdays = this._dateAdapter.getDayOfWeekNames('narrow');
    const longWeekdays = this._dateAdapter.getDayOfWeekNames('long');
    const weekdays = longWeekdays.map((long, i) => {
      return {long, narrow: narrowWeekdays[i]};
    });
    return weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
  });

  /** The current selected date. */
  readonly selectedDate: WritableSignal<D> = signal(this._dateAdapter.today());
  /** The current display month. */
  readonly viewMonth: WritableSignal<D> = signal(this.selectedDate());

  /** Calendar day cells. */
  readonly calendar = computed(() => {
    const month = this.viewMonth();
    const daysInMonth = this._dateAdapter.getNumDaysInMonth(month);
    const dateNames = this._dateAdapter.getDateNames();
    const calendar: CalendarCell[][] = [[]];
    for (let i = 0, cell = this._firstWeekOffset(); i < daysInMonth; i++, cell++) {
      if (cell == DAYS_PER_WEEK) {
        calendar.push([]);
        cell = 0;
      }
      const date = this._dateAdapter.createDate(
        this._dateAdapter.getYear(month),
        this._dateAdapter.getMonth(month),
        i + 1,
      );
      const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);
      calendar[calendar.length - 1].push({
        displayName: dateNames[i],
        ariaLabel,
        date,
        selected: signal(
          this._dateAdapter.compareDate(
            date,
            untracked(() => this.selectedDate()),
          ) === 0,
        ),
        day: i + 1,
      });
    }
    return calendar;
  });

  nextMonth(): void {
    this.viewMonth.set(this._dateAdapter.addCalendarMonths(this.viewMonth(), 1));
  }

  prevMonth(): void {
    this.viewMonth.set(this._dateAdapter.addCalendarMonths(this.viewMonth(), -1));
  }

  scrollDown(): void {
    this.nextMonth();
    setTimeout(() => this._dayButtons()[0]?.element.focus());
  }

  scrollUp(): void {
    this.prevMonth();
    setTimeout(() => this._dayButtons()[this._dayButtons().length - 1]?.element.focus());
  }

  onKeyDown(event: KeyboardEvent): void {
    const day = Number((event.target as Element).getAttribute('data-day'));
    if (!day) return;
    const viewMonthNumDays = this._dateAdapter.getNumDaysInMonth(this.viewMonth());
    if (day > 7 && day <= viewMonthNumDays - 7) return;
    const arrowLeft = event.key === 'ArrowLeft';
    const arrowRight = event.key === 'ArrowRight';
    const arrowUp = event.key === 'ArrowUp';
    const arrowDown = event.key === 'ArrowDown';
    if ((day === 1 && arrowLeft) || (day <= 7 && arrowUp)) {
      this.scrollUp();
    }
    if ((day === viewMonthNumDays && arrowRight) || (day > viewMonthNumDays - 7 && arrowDown)) {
      this.scrollDown();
    }
  }

  readonly videosByDate = computed(() => {
    const map = new Map<string, Video[]>();

    this.videos().forEach(video => {
      // 1. Check if publishDate exists to avoid "undefined" error
      // 2. Use type assertion (as any) or (as unknown as D)
      // because DateAdapter expects the generic type D
      if (video.publishDate) {
        const dateKey = this._dateAdapter.format(
          video.publishDate as unknown as D,
          'yyyy-MM-dd'
        );

        if (!map.has(dateKey)) {
          map.set(dateKey, []);
        }
        map.get(dateKey)!.push(video);
      }
    });

    return map;
  });

  onVideoIconClick(event: MouseEvent, videos: Video[]): void {
    // 1. Prevent event bubbling so the calendar cell isn't selected
    event.stopPropagation();

    // 2. Output video information to the console
    console.group(`Видео за ${this._dateAdapter.format(videos[0].publishDate as unknown as D, 'shortDate')}`);
    console.log(`Всего видео: ${videos.length}`);
    videos.forEach((video, index) => {
      console.log(`[${index + 1}] Название: ${video.title}, ID: ${video.id}`);
      // Assuming the Video model has title and id fields
    });
    console.groupEnd();
  }

  // Helper method to get videos for a specific cell
  getVideosForDate(date: D): Video[] {
    const key = this._dateAdapter.format(date, 'yyyy-MM-dd');
    return this.videosByDate().get(key) || [];
  }
}
