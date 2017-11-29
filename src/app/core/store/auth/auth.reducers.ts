import { AuthActions, ActionTypes } from './auth.actions';

import { User } from '../../models';

/**
 * The auth state.
 * @interface AuthState
 */
export interface AuthState {
  authenticated: boolean; // boolean if user is authenticated
  error?: string; // error message
  loaded: boolean; // true if we have attempted existing auth session
  loading: boolean; // true when loading
  user?: User; // the authenticated user
}

/**
 * The initial auth state.
 */
const initialAuthState: AuthState = {
  authenticated: false,
  loaded: false,
  loading: false
};

/**
 * The reducer function.
 * @function reducer
 * @param {State} state Current state
 * @param {AuthActions} action Incoming action
 */
export function reducer(state: any = initialAuthState, action: AuthActions): AuthState {

  switch (action.type) {
    case ActionTypes.AUTHENTICATE:
      return Object.assign({}, state, {
        loading: true
      });

    case ActionTypes.AUTHENTICATED_ERROR:
      return Object.assign({}, state, {
        authenticated: false,
        error: action.payload.error.message,
        loaded: true
      });

    case ActionTypes.AUTHENTICATED_SUCCESS:
      return Object.assign({}, state, {
        authenticated: action.payload.authenticated,
        loaded: true,
        user: action.payload.user
      });

    case ActionTypes.AUTHENTICATE_ERROR:
    case ActionTypes.SIGN_UP_ERROR:
      return Object.assign({}, state, {
        authenticated: false,
        error: action.payload.error.message,
        loading: false
      });

    case ActionTypes.AUTHENTICATE_SUCCESS:
    case ActionTypes.SIGN_UP_SUCCESS:
      const user: User = action.payload.user;

      // verify user is not null
      if (user === null) {
        return state;
      }

      return Object.assign({}, state, {
        authenticated: true,
        error: undefined,
        loading: false,
        user: user
      });

    case ActionTypes.SIGN_OUT_ERROR:
      return Object.assign({}, state, {
        authenticated: true,
        error: action.payload.error.message,
        user: undefined
      });

    case ActionTypes.SIGN_OUT_SUCCESS:
      return Object.assign({}, state, {
        authenticated: false,
        error: undefined,
        user: undefined
      });

    case ActionTypes.SIGN_UP:
      return Object.assign({}, state, {
        authenticated: false,
        error: undefined,
        loading: true
      });

    default:
      return state;
  }
}

/**
 * Returns true if the user is authenticated.
 * @function isAuthenticated
 * @param {AuthState} authState
 * @returns {boolean}
 */
export const isAuthenticated = (authState: AuthState) => authState.authenticated;

/**
 * Returns true if the authenticated has loaded.
 * @function isAuthenticatedLoaded
 * @param {AuthState} authState
 * @returns {boolean}
 */
export const isAuthenticatedLoaded = (authState: AuthState) => authState.loaded;

/**
 * Return the users state
 * @function getAuthenticatedUser
 * @param {State} authState
 * @returns {User}
 */
export const getAuthenticatedUser = (authState: AuthState) => authState.user;

/**
 * Returns the authentication error.
 * @function getAuthenticationError
 * @param {State} authState
 * @returns {Error}
 */
export const getAuthenticationError = (authState: AuthState) => authState.error;

/**
 * Returns true if request is in progress.
 * @function isLoading
 * @param {State} authState
 * @returns {boolean}
 */
export const isLoading = (authState: AuthState) => authState.loading;

/**
 * Returns the sign out error.
 * @function getSignOutError
 * @param {State} authState
 * @returns {Error}
 */
export const getSignOutError = (authState: AuthState) => authState.error;

/**
 * Returns the sign up error.
 * @function getSignUpError
 * @param {State} authState
 * @returns {Error}
 */
export const getSignUpError = (authState: AuthState) => authState.error;
