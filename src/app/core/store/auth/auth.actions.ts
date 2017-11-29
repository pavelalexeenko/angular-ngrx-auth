// import @ngrx
import { Action } from '@ngrx/store';

// import models
import { User } from '../../models';

export const ActionTypes = {
  AUTHENTICATE: '[auth] Authenticate',
  AUTHENTICATE_ERROR: '[auth] Authentication error',
  AUTHENTICATE_SUCCESS: '[auth] Authentication success',
  AUTHENTICATED: '[auth] Authenticated',
  AUTHENTICATED_ERROR: '[auth] Authenticated error',
  AUTHENTICATED_SUCCESS: '[auth] Authenticated success',
  SIGN_OUT: '[auth] Sign off',
  SIGN_OUT_ERROR: '[auth] Sign off error',
  SIGN_OUT_SUCCESS: '[auth] Sign off success',
  SIGN_UP: '[auth] Sign up',
  SIGN_UP_ERROR: '[auth] Sign up error',
  SIGN_UP_SUCCESS: '[auth] Sign up success'
};

export class AuthenticateAction implements Action {
  readonly type: string = ActionTypes.AUTHENTICATE;
  constructor(public payload: { email: string, password: string }) { }
}

export class AuthenticatedAction implements Action {
  readonly type: string = ActionTypes.AUTHENTICATED;
  constructor(public payload?: { token?: string }) { }
}

export class AuthenticatedSuccessAction implements Action {
  readonly type: string = ActionTypes.AUTHENTICATED_SUCCESS;
  constructor(public payload: { authenticated: boolean, user: User }) { }
}

export class AuthenticatedErrorAction implements Action {
  readonly type: string = ActionTypes.AUTHENTICATED_ERROR;
  constructor(public payload?: any) { }
}

export class AuthenticationErrorAction implements Action {
  readonly type: string = ActionTypes.AUTHENTICATE_ERROR;
  constructor(public payload?: any) { }
}

export class AuthenticationSuccessAction implements Action {
  readonly type: string = ActionTypes.AUTHENTICATE_SUCCESS;
  constructor(public payload: { user: User }) { }
}

export class SignOutAction implements Action {
  readonly type: string = ActionTypes.SIGN_OUT;
  constructor(public payload?: any) { }
}

export class SignOutErrorAction implements Action {
  readonly type: string = ActionTypes.SIGN_OUT_SUCCESS;
  constructor(public payload?: any) { }
}

export class SignOutSuccessAction implements Action {
  readonly type: string = ActionTypes.SIGN_OUT_SUCCESS;
  constructor(public payload?: any) { }
}

export class SignUpAction implements Action {
  readonly type: string = ActionTypes.SIGN_UP;
  constructor(public payload: { user: User }) { }
}

export class SignUpErrorAction implements Action {
  readonly type: string = ActionTypes.SIGN_UP_ERROR;
  constructor(public payload?: any) { }
}

export class SignUpSuccessAction implements Action {
  readonly type: string = ActionTypes.SIGN_UP_SUCCESS;
  constructor(public payload: { user: User }) { }
}

export type AuthActions =
  AuthenticateAction
  | AuthenticatedAction
  | AuthenticatedErrorAction
  | AuthenticatedSuccessAction
  | AuthenticationErrorAction
  | AuthenticationSuccessAction
  | SignUpAction
  | SignUpErrorAction
  | SignUpSuccessAction;
