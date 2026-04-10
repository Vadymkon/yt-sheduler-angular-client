import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkspacePage } from './pages/workspace.page/workspace.page';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WorkspacePage, MatSidenavContent, MatSidenav, MatSidenavContainer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('yt-sheduler-angular');
}
