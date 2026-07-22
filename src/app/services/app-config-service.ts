import { inject, Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import configJson from '../../assets/config.json';
type AppConfig = typeof configJson;

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  public IsServerAvaliable = true;
  private config: AppConfig | undefined;

  private readonly httpClient = new HttpClient(inject(HttpBackend));

  loadConfig(): Promise<void> {
    return firstValueFrom(
      this.httpClient.get<AppConfig>('/assets/config.json')
    ).then(data => {
      this.config = data;
    });
  }

  get get(): AppConfig {
    if (!this.config) {
      throw Error('Config not loaded!');
    }
    return this.config;
  }
}
