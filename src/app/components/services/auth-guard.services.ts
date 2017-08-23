import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";


@Injectable()

export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (sessionStorage.getItem('userToken') && state.url === '/login') {
            this.router.navigate(["home"]);
            return false;
        }
        else if (!sessionStorage.getItem('userToken') && state.url !== '/login') {
            this.router.navigate(["login"]);
            return false;
        } else
            return true;
    }
}
