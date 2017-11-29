import { NgModule } from '@angular/core';
import { Store, StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

import { reducers } from './reducers';
import { optionalImports } from './dev-tool.module';
import { NavigationSerializer } from './router';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule,
    ...optionalImports
  ],
  declarations: [],
  exports: [],
  providers: [
    { provide: RouterStateSerializer, useClass: NavigationSerializer }
  ]
})
export class CoreStoreModule { }
