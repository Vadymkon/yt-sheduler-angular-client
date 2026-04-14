import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListItem, MatListItemIcon } from '@angular/material/list';
import { MatOption } from '@angular/material/core';
import { MatSelect, MatSelectTrigger } from '@angular/material/select';
import { LangService } from '../../../../services/lang.service';

@Component({
  selector: 'app-change-language',
  imports: [
    MatIcon,
    MatListItem,
    MatListItemIcon,
    MatOption,
    MatSelect,
    MatSelectTrigger
  ],
  templateUrl: './change-language.component.html',
  styleUrl: './change-language.component.scss',
})
export class ChangeLanguageComponent {
  readonly ls = inject(LangService);
}
