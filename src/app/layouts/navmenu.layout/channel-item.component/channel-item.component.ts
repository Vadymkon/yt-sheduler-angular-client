import { Component, input, output } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatRipple } from '@angular/material/core';
import { NgOptimizedImage } from '@angular/common';
import { Channel } from '../../../models/channel.model';

@Component({
  selector: 'app-channel-item',
  imports: [
    MatCheckbox,
    MatIcon,
    MatIconButton,
    MatRipple,
    NgOptimizedImage
  ],
  templateUrl: './channel-item.component.html',
  styleUrl: './channel-item.component.scss',
})
export class ChannelItemComponent {
  channel = input.required<Channel>();
  toggleEvent = output<boolean>();
}
