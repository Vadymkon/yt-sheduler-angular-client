import { Component, inject, Signal } from '@angular/core';
import { MatDivider } from '@angular/material/list';
import { fakeChannels } from '../../../../assets/fakedata';
import { ChannelItemComponent } from '../channel-item.component/channel-item.component';
import { Channel } from '../../../models/channel.model';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { LangService } from '../../../services/lang.service';
import { AuthFacadeService } from '../../../services/Facade/auth-facade-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { WorkspaceFacadeService } from '../../../services/Facade/workspace-facade-service';
import { FormArray } from '@angular/forms';
import { YoutubeFacadeService } from '../../../services/Facade/youtube-facade-service';

@Component({
  selector: 'app-item-select-list',
  imports: [MatDivider, ChannelItemComponent, MatButton, MatIcon],
  templateUrl: './item-select-list.component.html',
  styleUrl: './item-select-list.component.scss',
})
export class ItemSelectListComponent {
  protected readonly authService = inject(AuthFacadeService);
  protected readonly ls = inject(LangService);
  protected readonly workspaceService = inject(WorkspaceFacadeService);
  protected readonly channels = this.workspaceService.channels;
  protected readonly youtubeService = inject(YoutubeFacadeService);

  chooseChannel(channel: Channel, $event: boolean) {}
}
