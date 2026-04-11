import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { WorkspacePage } from '../../pages/workspace.page/workspace.page';
import { WhatDeviceService } from '../../services/what-device.service';
import { NgClass } from '@angular/common';
import { HeaderNavbarComponent } from '../../components/header-navbar.component/header-navbar.component';

@Component({
  selector: 'app-navmenu-layout',
  imports: [
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    NgClass,
    HeaderNavbarComponent,
  ],
  templateUrl: './navmenu.layout.html',
  styleUrl: './navmenu.layout.scss',
})
export class NavmenuLayout {
  whatDeviceService = inject(WhatDeviceService);
}
