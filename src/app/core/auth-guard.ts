import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { AuthFacadeService } from '../services/Facade/auth-facade-service';
export const authGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot,
   state: RouterStateSnapshot) =>
  {
  const authService = inject(AuthFacadeService);
  return authService.isAuthenticated();
};
