import { Component, inject } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { WhatDeviceService } from '../../services/what-device.service';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { HeaderNavbarComponent } from '../../components/header-navbar.component/header-navbar.component';
import { fakeChannels } from '../../../assets/fakedata';
import { MatListModule, MatSelectionList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
@Component({
  selector: 'app-navmenu-layout',
  imports: [
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    NgClass,
    HeaderNavbarComponent,
    MatListModule,
    MatSelectionList,
    NgOptimizedImage,
    MatIcon,
    MatIconButton,
  ],
  templateUrl: './navmenu.layout.html',
  styleUrl: './navmenu.layout.scss',
})
export class NavmenuLayout {
  whatDeviceService = inject(WhatDeviceService);
  protected readonly fakeChannels = fakeChannels;
}
