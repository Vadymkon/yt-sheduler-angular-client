import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';
import { MatButton, MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { LangService } from '../../../services/lang.service';

@Component({
  selector: 'app-header-right',
  imports: [MatCardModule, MatMenuModule,NgOptimizedImage, MatButtonModule, MatIconButton],
  templateUrl: './header-right.component.html',
  styleUrl: './header-right.component.scss',
})
export class HeaderRightComponent {
  readonly ls = inject(LangService);
}
