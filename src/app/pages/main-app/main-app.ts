import { Component } from '@angular/core';
import { FileDragndropLayout } from '../../layouts/file-dragndrop.layout/file-dragndrop.layout';
import { HeaderLayout } from '../../layouts/header-layout/header-layout';
import { LoginPage } from '../login.page/login.page';
import { NavmenuLayout } from '../../layouts/navmenu.layout/navmenu.layout';
import { WorkspacePage } from '../workspace.page/workspace.page';

@Component({
  selector: 'app-main-app',
  imports: [
    FileDragndropLayout,
    HeaderLayout,
    NavmenuLayout,
    WorkspacePage
  ],
  templateUrl: './main-app.html',
  styleUrl: './main-app.scss',
})
export class MainApp {}
