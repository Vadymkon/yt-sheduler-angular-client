import { Component } from '@angular/core';
import { ModeSwitcherComponent } from '../../components/mode-switcher.component/mode-switcher.component';

@Component({
  selector: 'app-workspace',
  imports: [ModeSwitcherComponent],
  templateUrl: './workspace.page.html',
  styleUrl: './workspace.page.scss',
})
export class WorkspacePage {
  modeChangedLog(value: string) {
    console.log(value);
  }
}
