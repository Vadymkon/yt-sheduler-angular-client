import { inject, Injectable, Signal } from '@angular/core';
import { ViewMode } from '../../core/viewmode.model';
import { AuthFacadeService } from './auth-facade-service';
import { Channel } from '../../models/channel.model';
import { toSignal } from '@angular/core/rxjs-interop';
// DEBUG: link all services to actual page
@Injectable({
  providedIn: 'root',
})
export class WorkspaceFacadeService {
  private readonly authService = inject(AuthFacadeService);
  files: string = ""; // file list in fields for D&D and selectFile widgets
  mode : ViewMode = 'calendar'; // for choosing what state should be showed
  public readonly channels = toSignal(this.authService.getLinkedChannels(), { initialValue: [] });

  restoreSession() {
    this.authService.restoreSession();
  }
}
