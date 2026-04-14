import { Component, inject } from '@angular/core';
import {
  MatActionList,
  MatDivider,
  MatList,
  MatListItem,
  MatListModule,
} from '@angular/material/list';
import { LangService } from '../../../services/lang.service';
import { MatIcon } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-bottom-actions-navbar',
  imports: [MatDivider, MatIcon, MatListModule, MatSelectModule],
  templateUrl: './bottom-actions-navbar.component.html',
  styleUrl: './bottom-actions-navbar.component.scss',
})
export class BottomActionsNavbarComponent {
  ls = inject(LangService);
}
