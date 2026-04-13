import { Component, inject } from '@angular/core';
import { MatDivider } from '@angular/material/list';
import { fakeChannels } from '../../../../assets/fakedata';
import { ChannelItemComponent } from '../channel-item.component/channel-item.component';
import { Channel } from '../../../models/channel.model';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { LangService } from '../../../services/lang.service';

@Component({
  selector: 'app-item-select-list',
  imports: [MatDivider, ChannelItemComponent, MatButton, MatIcon],
  templateUrl: './item-select-list.component.html',
  styleUrl: './item-select-list.component.scss',
})
export class ItemSelectListComponent {
  protected readonly fakeChannels = fakeChannels;
  ls = inject(LangService);

  chooseChannel(channel: Channel, $event: boolean) {}
}
