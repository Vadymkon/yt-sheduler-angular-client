import { computed, inject, Injectable, signal, Signal } from '@angular/core';
import { ViewMode } from '../../core/viewmode.model';
import { Channel } from '../../models/channel.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { Video } from '../../models/video.model';
import { Subject } from 'rxjs';
// DEBUG: link all services to actual page
@Injectable({
  providedIn: 'root',
})
export class WorkspaceFacadeService {
  files: File[] = []; // file list in fields for D&D and selectFile widgets
  mode : ViewMode = 'calendar'; // for choosing what state should be showed
  public channels = signal<Channel[]>([]);
  public videos = signal<Video[]>([]);
  fileLabels = "";
}
