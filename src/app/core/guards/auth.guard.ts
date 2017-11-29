import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { isAuthenticated, AppState } from '../store/reducers';
import * as RouterActions from '../store/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private store: Store<AppState>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    const observable = this.store.select(isAuthenticated);
    observable.subscribe(authenticated => {
      console.log('Authenticated: ', authenticated);
      if (!authenticated) {
        this.store.dispatch(new RouterActions.Go({ path: ['/auth/sign-in']}));
      }
    });

    return observable;
  }

  canActivateChild (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }
}
