import { Component, computed, inject } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { WhatDeviceService } from '../../services/what-device.service';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { HeaderNavbarComponent } from '../../components/header-navbar.component/header-navbar.component';
import { MatListModule, MatSelectionList } from '@angular/material/list';
import { ItemSelectListComponent } from './item-select-list.component/item-select-list.component';
import { NavHeaderComponent } from './nav-header.component/nav-header.component';
import { BottomActionsNavbarComponent } from './bottom-actions-navbar.component/bottom-actions-navbar.component';
import { NavLogoComponent } from './nav-logo.component/nav-logo.component';
import { WorkspaceFacadeService } from '../../services/Facade/workspace-facade-service';
import { Channel } from '../../models/channel.model';
@Component({
  selector: 'app-navmenu-layout',
  imports: [
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    NgClass,
    HeaderNavbarComponent,
    MatListModule,
    ItemSelectListComponent,
    NavHeaderComponent,
    BottomActionsNavbarComponent,
    NavLogoComponent,
  ],
  templateUrl: './navmenu.layout.html',
  styleUrl: './navmenu.layout.scss',
})
export class NavmenuLayout {
  whatDeviceService = inject(WhatDeviceService);
  protected readonly workspaceService = inject(WorkspaceFacadeService);
  protected readonly channels = this.workspaceService.channels;

  firstChannel = computed<Channel>(() => { return this.channels().filter(channel => channel.selected)[0] ?? this.channels()[0]; });
}
