import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { AppConfigService } from './services/app-config-service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/http-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAppInitializer(() => {
      const configService = inject(AppConfigService);
      return configService.loadConfig();
    })
  ]
};
