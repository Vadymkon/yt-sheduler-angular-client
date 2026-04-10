import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModeSwitcherComponent } from './components/mode-switcher.component/mode-switcher.component';
import { WorkspacePage } from './pages/workspace.page/workspace.page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WorkspacePage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('yt-sheduler-angular');
}
