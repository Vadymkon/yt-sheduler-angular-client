import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkspacePage } from './pages/workspace.page/workspace.page';
import {MatSidenavModule} from '@angular/material/sidenav';
import { WhatDeviceService } from './services/what-device.service';
import { NavmenuLayout } from './layouts/navmenu.layout/navmenu.layout';
import { FileDragndropLayout } from './layouts/file-dragndrop.layout/file-dragndrop.layout';
import { HeaderLayout } from './layouts/header-layout/header-layout';
import { LoginPage } from './pages/login.page/login.page';
import { WorkspaceFacadeService } from './services/Facade/workspace-facade-service';
import { AuthFacadeService } from './services/Facade/auth-facade-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { AppConfigService } from './services/app-config-service';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { YoutubeFacadeService } from './services/Facade/youtube-facade-service';

@Component({
  selector: 'app-root',
  imports: [MatSidenavModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('yt-sheduler-angular');
  protected readonly authService = inject(AuthFacadeService);
  protected readonly youtubeService = inject(YoutubeFacadeService);
  protected readonly workspaceService = inject(WorkspaceFacadeService);

  constructor() {
    this.authService.restoreSession();
    this.authService.saveLinkedChannel(); // if there's some channel appeared
  }

  async ngOnInit() {
    this.workspaceService.channels.set(await firstValueFrom(this.authService.getLinkedChannels()));
    this.workspaceService.videos.set
    // update videos
    await firstValueFrom(this.youtubeService.getVideos
    (this.workspaceService.channels().filter(channel => channel.selected)));
  }
}
