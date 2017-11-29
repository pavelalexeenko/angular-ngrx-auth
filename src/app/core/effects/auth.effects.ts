import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { AuthService } from '../services';

import { User } from '../models/user';

import {
  ActionTypes,
  AuthenticatedErrorAction,
  AuthenticatedSuccessAction,
  AuthenticationErrorAction,
  AuthenticationSuccessAction,
  SignOutErrorAction,
  SignOutSuccessAction,
  SignUpErrorAction,
  SignUpSuccessAction
} from '../store/auth';

@Injectable()
export class AuthEffects {

  /**
   * Authenticate user.
   */
  @Effect()
  public authenticate: Observable<Action> = this.actions
    .ofType(ActionTypes.AUTHENTICATE)
    .debounceTime(500)
    .map(toPayload)
    .switchMap(payload => {
      return this.authService.authenticate(payload.email, payload.password)
        .map(user => new AuthenticationSuccessAction({ user: user }))
        .catch(error => Observable.of(new AuthenticationErrorAction({ error: error })));
    });

  /**
   * Determine if the user is authenticated.
   */
  @Effect()
  public authenticated: Observable<Action> = this.actions
    .ofType(ActionTypes.AUTHENTICATED)
    .map(toPayload)
    .switchMap(payload => {
      return this.authService.authenticatedUser()
        .map(user => new AuthenticatedSuccessAction({ authenticated: (user !== null), user: user }))
        .catch(error => Observable.of(new AuthenticatedErrorAction({ error: error })));
    });

  /**
   * Create a new user.
   */
  @Effect()
  public createUser: Observable<Action> = this.actions
    .ofType(ActionTypes.SIGN_UP)
    .debounceTime(500)
    .map(toPayload)
    .switchMap(payload => {
      return this.authService.create(payload.user)
        .map(user => new SignUpSuccessAction({ user: user }))
        .catch(error => Observable.of(new SignUpErrorAction({ error: error })));
    });

  /**
   * Terminate user session.
   */
  @Effect()
  public signOut: Observable<Action> = this.actions
    .ofType(ActionTypes.SIGN_OUT)
    .map(toPayload)
    .switchMap(payload => {
      return this.authService.signout()
        .map(value => new SignOutSuccessAction())
        .catch(error => Observable.of(new SignOutErrorAction({ error: error })));
    });

  /**
   * @constructor
   * @param {Actions} actions
   * @param {AuthService} authService
   */
  constructor(
    private actions: Actions,
    private authService: AuthService
  ) { }
}
