import { createSelector } from 'reselect';
import { ActionReducerMap, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/store';
import * as NgrxRouterStore from '@ngrx/router-store';

import { environment } from '../../../environments/environment';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as authReducer from './auth';

export interface AppState {
  router: NgrxRouterStore.RouterReducerState;
  authReducer: authReducer.AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: NgrxRouterStore.routerReducer,
  authReducer: authReducer.reducer
};

/**********************************************************
 * Users Reducers
 *********************************************************/

/**
 * Returns the user state.
 * @function getUserState
 * @param {State} state Top level state.
 * @return {State}
 */
export const getUsersState = (appState: AppState) => appState.authReducer;

/**
 * Returns the authenticated user
 * @function getAuthenticatedUser
 * @param {State} state
 * @param {any} props
 * @return {User}
 */
export const getAuthenticatedUser = createSelector(getUsersState, authReducer.getAuthenticatedUser);

/**
 * Returns the authentication error.
 * @function getAuthenticationError
 * @param {State} state
 * @param {any} props
 * @return {Error}
 */
export const getAuthenticationError = createSelector(getUsersState, authReducer.getAuthenticationError);

/**
 * Returns true if the user is authenticated
 * @function isAuthenticated
 * @param {State} state
 * @param {any} props
 * @return {boolean}
 */
export const isAuthenticated = createSelector(getUsersState, authReducer.isAuthenticated);

/**
 * Returns true if the user is authenticated
 * @function isAuthenticated
 * @param {State} state
 * @param {any} props
 * @return {boolean}
 */
export const isAuthenticatedLoaded = createSelector(getUsersState, authReducer.isAuthenticatedLoaded);

/**
 * Returns true if the authentication request is loading.
 * @function isAuthenticationLoading
 * @param {State} state
 * @param {any} props
 * @return {boolean}
 */
export const isAuthenticationLoading = createSelector(getUsersState, authReducer.isLoading);

/**
 * Returns the sign out error.
 * @function getSignOutError
 * @param {State} state
 * @param {any} props
 * @return {Error}
 */
export const getSignOutError = createSelector(getUsersState, authReducer.getSignOutError);

/**
 * Returns the sign up error.
 * @function getSignUpError
 * @param {State} state
 * @param {any} props
 * @return {Error}
 */
export const getSignUpError = createSelector(getUsersState, authReducer.getSignUpError);
