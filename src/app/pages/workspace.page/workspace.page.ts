import { Component, inject, input } from '@angular/core';
import { ModeSwitcherComponent } from '../../components/mode-switcher.component/mode-switcher.component';
import { FileGetterComponent } from '../../components/file-getter.component/file-getter.component';
import { WhatDeviceService } from '../../services/what-device.service';
import { VideoTableComponent } from '../../components/video-table.component/video-table.component';
import { VideoCalendarComponent } from '../../components/video-calendar.component/video-calendar.component';
import {
  VideoTableScrollableComponent
} from '../../components/video-table.component/video-table-scrollable.component/video-table-scrollable.component';
import { WorkspaceFacadeService } from '../../services/Facade/workspace-facade-service';
import { AuthFacadeService } from '../../services/Facade/auth-facade-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-workspace',
  imports: [
    FileGetterComponent,
    VideoCalendarComponent,
    VideoTableScrollableComponent,
  ],
  templateUrl: './workspace.page.html',
  styleUrl: './workspace.page.scss',
})
export class WorkspacePage {
  protected readonly whatDeviceService = inject(WhatDeviceService);
  protected readonly workspaceService = inject(WorkspaceFacadeService);
  protected readonly authService = inject(AuthFacadeService);
}
