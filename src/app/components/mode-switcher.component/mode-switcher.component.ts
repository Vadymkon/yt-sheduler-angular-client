import { Component, inject, output } from '@angular/core';
import { MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import { MatIcon } from '@angular/material/icon';
import { WorkspaceFacadeService } from '../../services/Facade/workspace-facade-service';

@Component({
  selector: 'app-mode-switcher',
  imports: [MatButtonToggleGroup, MatButtonToggle, MatIcon],
  templateUrl: './mode-switcher.component.html',
  styleUrl: './mode-switcher.component.scss',
})
export class ModeSwitcherComponent {
  workspaceService = inject(WorkspaceFacadeService);
  onChangeModeEvent = output<string>();
}
