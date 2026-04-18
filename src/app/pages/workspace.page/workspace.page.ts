import { Component, inject, input } from '@angular/core';
import { ModeSwitcherComponent } from '../../components/mode-switcher.component/mode-switcher.component';
import { FileGetterComponent } from '../../components/file-getter.component/file-getter.component';
import { WhatDeviceService } from '../../services/what-device.service';
import { VideoTableComponent } from '../../components/video-table.component/video-table.component';
import { FAKE_VIDEOS } from '../../../assets/fakedata';
import { GlobalVarsService } from '../../services/global-vars.service';
import { VideoCalendarComponent } from '../../components/video-calendar.component/video-calendar.component';
import {
  VideoTableScrollableComponent
} from '../../components/video-table.component/video-table-scrollable.component/video-table-scrollable.component';

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
  protected readonly globalService = inject(GlobalVarsService);
  protected readonly FAKE_VIDEOS = FAKE_VIDEOS;
}
