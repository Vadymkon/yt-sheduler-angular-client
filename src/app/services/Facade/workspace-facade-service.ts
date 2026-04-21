import { inject, Injectable } from '@angular/core';
import { ViewMode } from '../../core/viewmode.model';
import { AuthFacadeService } from './auth-facade-service';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceFacadeService {
  private readonly authService = inject(AuthFacadeService);
  files: string = ""; // file list in fields for D&D and selectFile widgets
  mode : ViewMode = 'calendar'; // for choosing what state should be showed

  restoreSession() {
    this.authService.restoreSession();
  }
}
