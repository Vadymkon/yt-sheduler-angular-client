import { HttpInterceptorFn, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs';
import { inject } from '@angular/core';
import { AppConfigService } from '../services/app-config-service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const configService = inject(AppConfigService);
  const isExternalUrl = req.url.startsWith('http://') || req.url.startsWith('https://');

  // If URL is external, catch BASE_API_URL from our backend
  const targetUrl = isExternalUrl
    ? req.url
    : `${configService.get.BASE_API_URL}${req.url}`;

  // Setup cloning parameters
  const modifiedReq = req.clone({
    url: targetUrl,
    // turn on withCredentials ONLY for C# backend!
    withCredentials: !isExternalUrl
  });

  return next(modifiedReq).pipe(
    tap({
      next: (event) => {
        if (event instanceof HttpResponse) {
          console.log('Server response:', event.status);
        }
      },
      error: (err: unknown) => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          console.log('Unauthorized - требуется повторная авторизация');
        }
      }
    })
  );
};
