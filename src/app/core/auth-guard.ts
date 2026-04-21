import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, Router} from '@angular/router';
import { inject } from '@angular/core';
import { AuthFacadeService } from '../services/Facade/auth-facade-service';
export const authGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot,
   state: RouterStateSnapshot) =>
  {const router = inject(Router);
  const authService = inject(AuthFacadeService);
    if (authService.isAuthenticated()) {
      return true;
    }

    return router.createUrlTree(['/login']);
};
