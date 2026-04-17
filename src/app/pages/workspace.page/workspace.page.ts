import { Component, inject } from '@angular/core';
import { ModeSwitcherComponent } from '../../components/mode-switcher.component/mode-switcher.component';
import { FileGetterComponent } from '../../components/file-getter.component/file-getter.component';
import { WhatDeviceService } from '../../services/what-device.service';
import { VideoTableComponent } from '../../components/video-table.component/video-table.component';

@Component({
  selector: 'app-workspace',
  imports: [FileGetterComponent, VideoTableComponent],
  templateUrl: './workspace.page.html',
  styleUrl: './workspace.page.scss',
})
export class WorkspacePage {
  whatDeviceService = inject(WhatDeviceService);
}
