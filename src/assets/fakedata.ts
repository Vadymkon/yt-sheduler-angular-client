import { Channel } from '../app/models/channel.model';
import { Video } from '../app/models/video.model';

export const fakeChannels: Channel[] = [
  {
    title: "Discovery Channel",
    photoUrl: "https://picsum.photos/seed/discovery/200/200"
  },
  {
    title: "National Geographic",
    photoUrl: "https://picsum.photos/seed/natgeo/200/200"
  },
  {
    title: "History Channel",
  },
  {
    title: "Animal Planet",
    photoUrl: "https://picsum.photos/seed/animal/200/200",
    shedule: undefined
  },
  {
    title: "Science TV"
  }
];

export const FAKE_VIDEOS: Video[] = [
  // 2 квітня (Четвер)
  { id: '1', title: 'Як вивчити Angular за 30 днів', description: 'Повний курс для початківців.', thumbnailURL: 'https://picsum.photos/id/1/200/120', publishStatus: 'published', publishDate: new Date('2026-04-02') },
  { id: '2', title: 'Основи TypeScript', description: 'Типи, інтерфейси та дженерики.', thumbnailURL: 'https://picsum.photos/id/2/200/120', publishStatus: 'published', publishDate: new Date('2026-04-02') },
  { id: '3', title: 'Angular Material Table Tutorial', description: 'Налаштовуємо таблиці як профі.', thumbnailURL: 'https://picsum.photos/id/3/200/120', publishStatus: 'published', publishDate: new Date('2026-04-02') },

  // 4 квітня (Субота)
  { id: '4', title: 'RxJS для початківців', description: 'Стріми та обзервабли простими словами.', thumbnailURL: 'https://picsum.photos/id/4/200/120', publishStatus: 'published', publishDate: new Date('2026-04-04') },
  { id: '5', title: 'State Management з NgRx', description: 'Керування станом великих додатків.', thumbnailURL: 'https://picsum.photos/id/5/200/120', publishStatus: 'published', publishDate: new Date('2026-04-04') },
  { id: '6', title: 'Створення кастомних директив', description: 'Маніпуляція DOM в Angular.', thumbnailURL: 'https://picsum.photos/id/6/200/120', publishStatus: 'published', publishDate: new Date('2026-04-04') },

  // 7 квітня (Вівторок)
  { id: '7', title: 'Dependency Injection в деталях', description: 'Як працює DI під капотом.', thumbnailURL: 'https://picsum.photos/id/7/200/120', publishStatus: 'published', publishDate: new Date('2026-04-07') },
  { id: '8', title: 'Оптимізація Angular додатків', description: 'Як зробити застосунок швидким.', thumbnailURL: 'https://picsum.photos/id/8/200/120', publishStatus: 'published', publishDate: new Date('2026-04-07') },
  { id: '9', title: 'Unit Testing з Jasmine & Karma', description: 'Пишемо надійні тести.', thumbnailURL: 'https://picsum.photos/id/9/200/120', publishStatus: 'published', publishDate: new Date('2026-04-07') },

  // 9 квітня (Четвер)
  { id: '10', title: 'Що нового в Angular 17/18', description: 'Огляд останніх фіч.', thumbnailURL: 'https://picsum.photos/id/10/200/120', publishStatus: 'published', publishDate: new Date('2026-04-09') },
  { id: '11', title: 'SCSS vs CSS в Angular', description: 'Чому варто обрати препроцесори.', thumbnailURL: 'https://picsum.photos/id/11/200/120', publishStatus: 'published', publishDate: new Date('2026-04-09') },
  { id: '12', title: 'Робота з Reactive Forms', description: 'Валідація та динамічні поля.', thumbnailURL: 'https://picsum.photos/id/12/200/120', publishStatus: 'published', publishDate: new Date('2026-04-09') },

  // 11 квітня (Субота)
  { id: '13', title: 'Lazy Loading модулів', description: 'Розбиваємо код на частини.', thumbnailURL: 'https://picsum.photos/id/13/200/120', publishStatus: 'published', publishDate: new Date('2026-04-11') },
  { id: '14', title: 'Angular Universal & SSR', description: 'Рендеринг на стороні сервера.', thumbnailURL: 'https://picsum.photos/id/14/200/120', publishStatus: 'published', publishDate: new Date('2026-04-11') },
  { id: '15', title: 'Анімації в Angular', description: 'Додаємо інтерактивності інтерфейсу.', thumbnailURL: 'https://picsum.photos/id/15/200/120', publishStatus: 'published', publishDate: new Date('2026-04-11') },

  // 14 квітня (Вівторок)
  { id: '16', title: 'Підключення Firebase', description: 'Швидкий бекенд для Angular.', thumbnailURL: 'https://picsum.photos/id/16/200/120', publishStatus: 'published', publishDate: new Date('2026-04-14') },
  { id: '17', title: 'PWA на Angular', description: 'Як зробити офлайн додаток.', thumbnailURL: 'https://picsum.photos/id/17/200/120', publishStatus: 'published', publishDate: new Date('2026-04-14') },
  { id: '18', title: 'Використання Signals', description: 'Нова реактивність в Angular.', thumbnailURL: 'https://picsum.photos/id/18/200/120', publishStatus: 'published', publishDate: new Date('2026-04-14') },

  // 16 квітня (Четвер) - Залишається 2 відео
  { id: '19', title: 'CI/CD для фронтенда', description: 'Автоматизація деплою.', thumbnailURL: 'https://picsum.photos/id/19/200/120', publishStatus: 'published', publishDate: new Date('2026-04-16') },
  { id: '20', title: 'Огляд Angular DevTools', description: 'Як дебажити код ефективно.', thumbnailURL: 'https://picsum.photos/id/20/200/120', publishStatus: 'published', publishDate: new Date('2026-04-16') }
];
