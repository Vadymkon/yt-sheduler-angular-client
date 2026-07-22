import { HttpInterceptorFn, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs';
import { AppConfigService} from '../services/app-config-service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Clone request and add header
  const configService = inject(AppConfigService);
  const modifiedReq = req.clone({
    url: req.url.startsWith('http') ? req.url : `${configService.get.BASE_API_URL}${req.url}`,
    withCredentials: true // CookieAuthentication
  });

  // Send changed request
  return next(modifiedReq).pipe(
    tap({
      next: (event) => {
        if (event instanceof HttpResponse) {
          console.log('Server response');
        }
      },
      error: (err) => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          console.log('Unauthorized');
        }
      }
    })
  );
};
