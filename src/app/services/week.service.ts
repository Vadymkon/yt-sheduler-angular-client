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

    // days template ISO format
    const days = [
      { id: '1', label: t.mon },
      { id: '2', label: t.tue },
      { id: '3', label: t.wed },
      { id: '4', label: t.thu },
      { id: '5', label: t.fri },
      { id: '6', label: t.sat },
      { id: '7', label: t.sun }
    ];

    // mix if en
    if (code === 'en') {
      return [days[6], ...days.slice(0, 6)];
    }

    // return
    return days;
  }

}
