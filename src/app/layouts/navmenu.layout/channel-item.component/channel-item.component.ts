import { Component, computed, inject, input, output } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatRipple } from '@angular/material/core';
import { NgOptimizedImage } from '@angular/common';
import { Channel } from '../../../models/channel.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogChannelSettings } from '../../../pages/dialog-channel-settings/dialog-channel-settings';

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
  readonly dialog = inject(MatDialog);
  channel = input.required<Channel>();
  toggleEvent = output<boolean>();
  openChannelSettings() {
    this.dialog.open(DialogChannelSettings, {data: this.channel});
  }
}
