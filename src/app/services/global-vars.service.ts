import { Injectable } from '@angular/core';
import { ViewMode } from '../models/viewmode.model';

@Injectable({
  providedIn: 'root',
})

export class GlobalVarsService {
  mode:ViewMode = 'calendar';
}
