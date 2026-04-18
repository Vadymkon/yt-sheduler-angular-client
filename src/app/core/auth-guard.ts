import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { AuthTemporaryService } from '../services/auth-temporary.service';
export const authGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot,
   state: RouterStateSnapshot) =>
  {
  const authService = inject(AuthTemporaryService);
  return authService.isAuthenticated();
};
