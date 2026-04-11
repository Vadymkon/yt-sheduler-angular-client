import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkspacePage } from './pages/workspace.page/workspace.page';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { WhatDeviceService } from './services/what-device.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [WorkspacePage, MatSidenavModule, MatIcon, MatIconButton, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('yt-sheduler-angular');
  whatDeviceService = inject(WhatDeviceService);
}
