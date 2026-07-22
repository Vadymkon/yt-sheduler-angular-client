import { Component, computed, inject, input, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Channel } from '../../../models/channel.model';
import { MatDivider } from '@angular/material/list';
import { LangService } from '../../../services/lang.service';

@Component({
  selector: 'app-nav-header',
  imports: [NgOptimizedImage, MatDivider],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.scss',
})
export class NavHeaderComponent {
  readonly ls = inject(LangService);
  channel = input.required<Channel>();
}
