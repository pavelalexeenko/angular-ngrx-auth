import { NgModule, Optional, SkipSelf } from '@angular/core';

import { CoreStoreModule } from './store';
import { AppEffectsModules } from './effects';

import { APP_GUARDS } from './guards';
import { APP_SERVICES } from './services';
import { APP_RESOLVERS } from './resolvers';

@NgModule({
  imports: [CoreStoreModule, AppEffectsModules],
  exports: [CoreStoreModule],
  providers: [...APP_SERVICES, ...APP_RESOLVERS, ...APP_GUARDS]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    console.log(CoreModule.name, 'loaded!');
    this.throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
    if (parentModule) {
      throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
