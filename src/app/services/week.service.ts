import { computed, inject, Injectable } from '@angular/core';
import { LangService } from './lang.service';

@Injectable({
  providedIn: 'root',
})
export class WeekService {
  private readonly ls = inject(LangService);

  get weekDays() {
    // get current state of ls
    const t = this.ls.t;
    const code = this.ls.getLangCode();

    // days template
    const days = [
      { id: 'mon', label: t.mon },
      { id: 'tue', label: t.tue },
      { id: 'wed', label: t.wed },
      { id: 'thu', label: t.thu },
      { id: 'fri', label: t.fri },
      { id: 'sat', label: t.sat },
      { id: 'sun', label: t.sun }
    ];

    // mix if en
    if (code === 'en') {
      return [days[6], ...days.slice(0, 6)];
    }

    // return
    return days;
  }

}
