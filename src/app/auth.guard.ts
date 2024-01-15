import { inject } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = CanActivate;


function CanActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean{
  const loggedIn = localStorage.getItem("loggedIn")
  const router = inject(Router);
  if (loggedIn) {
      return true;
  } else {
    router.navigate(['login']);
    return false;
  }
}
