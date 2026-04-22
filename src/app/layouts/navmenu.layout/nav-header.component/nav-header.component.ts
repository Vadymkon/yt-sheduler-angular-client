import { Component, computed, input, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Channel } from '../../../models/channel.model';
import { MatDivider } from '@angular/material/list';

@Component({
  selector: 'app-nav-header',
  imports: [NgOptimizedImage, MatDivider],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.scss',
})
export class NavHeaderComponent {
  channel = input.required<Channel>();
}
