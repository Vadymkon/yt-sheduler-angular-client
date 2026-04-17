import { Component } from '@angular/core';
import { ModeSwitcherComponent } from '../../../components/mode-switcher.component/mode-switcher.component';

@Component({
  selector: 'app-header-center',
  imports: [ModeSwitcherComponent],
  templateUrl: './header-center.component.html',
  styleUrl: './header-center.component.scss',
})
export class HeaderCenterComponent {
  modeChangedLog(value: string) {
    console.log(value);
  }
}
