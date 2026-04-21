import { Component, inject } from '@angular/core';
import { MatDivider } from '@angular/material/list';
import { fakeChannels } from '../../../../assets/fakedata';
import { ChannelItemComponent } from '../channel-item.component/channel-item.component';
import { Channel } from '../../../models/channel.model';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { LangService } from '../../../services/lang.service';
import { AuthFacadeService } from '../../../services/Facade/auth-facade-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-item-select-list',
  imports: [MatDivider, ChannelItemComponent, MatButton, MatIcon],
  templateUrl: './item-select-list.component.html',
  styleUrl: './item-select-list.component.scss',
})
export class ItemSelectListComponent {
  protected readonly authService = inject(AuthFacadeService);
  protected readonly ls = inject(LangService);
  protected readonly channels = toSignal(this.authService.getLinkedChannels(), { initialValue: [] });

  chooseChannel(channel: Channel, $event: boolean) {}
}
