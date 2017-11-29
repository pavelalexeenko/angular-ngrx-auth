import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export const ActionTypes = {
  GO: '[Router] Go',
  BACK: '[Router] Back',
  FORWARD: '[Router] Forward'
};

export class Go implements Action {
  readonly type: string = ActionTypes.GO;

  constructor(public payload: {
    path: any[];
    query?: object;
    extras?: NavigationExtras;
  }) {}
}

export class Back implements Action {
  readonly type: string = ActionTypes.BACK;
}

export class Forward implements Action {
  readonly type: string = ActionTypes.FORWARD;
}

export type RouterActions = Go | Back | Forward;
