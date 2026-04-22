import { inject, Injectable, signal, Signal } from '@angular/core';
import { ViewMode } from '../../core/viewmode.model';
import { Channel } from '../../models/channel.model';
import { toSignal } from '@angular/core/rxjs-interop';
// DEBUG: link all services to actual page
@Injectable({
  providedIn: 'root',
})
export class WorkspaceFacadeService {
  files: string = ""; // file list in fields for D&D and selectFile widgets
  mode : ViewMode = 'calendar'; // for choosing what state should be showed
  public channels:Signal<Channel[]> = signal<Channel[]>([]);//toSignal(this.authService.getLinkedChannels(), { initialValue: [] });
}
