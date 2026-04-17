import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import configJson from '../../assets/config.json';
type AppConfig = typeof configJson;

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private config: AppConfig | undefined;

  constructor(private http: HttpClient) {
    this.loadConfig();
  }

  loadConfig(): Promise<void> {
    return firstValueFrom(
      this.http.get<AppConfig>('/assets/config.json')
    ).then(data => {
      this.config = data;
    });
  }

  get settings(): AppConfig {
    if (!this.config) {
      throw Error('Config not loaded!');
    }
    return this.config;
  }
}
