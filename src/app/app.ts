import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkspacePage } from './pages/workspace.page/workspace.page';
import {MatSidenavModule} from '@angular/material/sidenav';
import { WhatDeviceService } from './services/what-device.service';
import { NavmenuLayout } from './layouts/navmenu.layout/navmenu.layout';

@Component({
  selector: 'app-root',
  imports: [WorkspacePage, MatSidenavModule, NavmenuLayout],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('yt-sheduler-angular');
}
