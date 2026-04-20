import { Injectable } from '@angular/core';
import { ViewMode } from '../../models/viewmode.model';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceFacadeService {
  files: string = ""; // file list in fields for D&D and selectFile widgets
  mode : ViewMode = 'calendar'; // for choosing what state should be showed
}
