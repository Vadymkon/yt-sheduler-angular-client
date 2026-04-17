import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { HeaderLeftComponent } from './header-left.component/header-left.component';
import { HeaderCenterComponent } from './header-center.component/header-center.component';
import { HeaderRightComponent } from './header-right.component/header-right.component';

@Component({
  selector: 'app-header-layout',
  imports: [MatToolbar, HeaderLeftComponent, HeaderCenterComponent, HeaderRightComponent],
  templateUrl: './header-layout.html',
  styleUrl: './header-layout.scss',
})
export class HeaderLayout {}
