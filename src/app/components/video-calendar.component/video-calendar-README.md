# 📅 Video Calendar Component

`VideoCalendarComponent` is a custom, responsive, and accessible (a11y)
Angular calendar component designed to visualize content schedules
(e.g., scheduled videos). It automatically groups videos by date and
displays indicators showing the number of publications scheduled for
each day.

------------------------------------------------------------------------

## ✨ Key Features

-   **Responsive:** Looks great on both desktop and mobile using CSS
    `clamp()` and `aspect-ratio`.
-   **Accessible (a11y):** Built on top of `@angular/aria/grid` with
    full keyboard navigation and proper ARIA roles.
-   **Performant:** Uses modern Angular reactivity (Signals: `input()`,
    `computed()`, `signal()`).
-   **DateAdapter Integration:** Works with Angular Material
    `DateAdapter` (supports native Date, Moment.js, Luxon).

------------------------------------------------------------------------

## 📦 Dependencies

Install required packages:

``` bash
npm install @angular/cdk @angular/material @angular/aria
```

Add Material Symbols font to global styles:

``` css
@import url('https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined');
```

------------------------------------------------------------------------

## 🛠 Usage

### 1. Import Component

``` ts
import { Component } from '@angular/core';
import { VideoCalendarComponent } from './path-to/video-calendar.component';
import { Video } from './models/video.model';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [VideoCalendarComponent],
  template: `<app-video-calendar [videos]="myVideos"></app-video-calendar>`
})
export class ParentComponent {
  myVideos: Video[] = [
    { id: '1', title: 'Angular Tutorial', publishDate: new Date('2026-04-15') },
  ];
}
```

------------------------------------------------------------------------

### 2. Data Model

``` ts
export interface Video {
  id: string;
  title: string;
  publishDate?: Date; // Required for calendar grouping
}
```

------------------------------------------------------------------------

## 🎛 Component API

### Inputs

Name     Type                   Description
  -------- ---------------------- ---------------------------
videos   `Video[]` (required)   List of videos to display

### Internal State (Signals)

-   `viewMonth` --- current visible month
-   `selectedDate` --- currently selected date
-   `videosByDate` --- computed map of videos grouped by date

------------------------------------------------------------------------

## 🖱 Interactivity & Events

### Navigation

-   Header arrows switch months
-   Clicking a cell selects a date
-   Keyboard navigation supported:
  -   Arrow keys move selection
  -   Auto-switches month at edges

### Video Icon Click

-   Shows camera icon + count when videos exist
-   Uses `event.stopPropagation()`
-   Default behavior: logs videos to console

💡 Tip: Replace `console.log` with dialog/sidebar logic.

------------------------------------------------------------------------

## 🎨 Styling

### CSS Variables

Define globally:

``` css
:root {
  --inter-font: 'Inter', sans-serif;
  --septenary-contrast: #ffffff;
  --senary-contrast: #f5f5f5;
  --indigo-blue: #3f51b5;
}
```

### Responsiveness

-   Uses `aspect-ratio: 1 / 1` for square cells
-   Uses `clamp()` for scalable typography/icons
-   Max width: `800px`

------------------------------------------------------------------------

## 📱 Accessibility

-   ARIA roles for screen readers
-   Fully keyboard navigable
-   Focus management via grid system

------------------------------------------------------------------------

## 🚀 Notes

-   Built with Angular standalone components
-   Optimized for performance with Signals
-   Easy to extend (modals, sidebars, etc.)

------------------------------------------------------------------------

## 📄 License

MIT
