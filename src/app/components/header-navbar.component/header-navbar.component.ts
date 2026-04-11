import { Component, inject, output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { WhatDeviceService } from '../../services/what-device.service';

@Component({
  selector: 'app-header-navbar',
  imports: [MatIcon, MatIconButton],
  templateUrl: './header-navbar.component.html',
  styleUrl: './header-navbar.component.scss',
})
export class HeaderNavbarComponent {
  whatDeviceService = inject(WhatDeviceService);
  toggleMenu = output();
}
