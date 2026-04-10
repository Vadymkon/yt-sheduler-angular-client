import { Component, output } from '@angular/core';
import { MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-mode-switcher',
  imports: [MatButtonToggleGroup, MatButtonToggle, MatIcon],
  templateUrl: './mode-switcher.component.html',
  styleUrl: './mode-switcher.component.scss',
})
export class ModeSwitcherComponent {
  onChangeModeEvent = output<string>();
}
