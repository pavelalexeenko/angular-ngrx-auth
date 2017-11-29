import { EffectsModule } from '@ngrx/effects';

import { RouterEffects } from './router.effects';
import { AuthEffects } from './auth.effects';

export const AppEffectsModules = EffectsModule.forRoot([
  RouterEffects,
  AuthEffects,
]);
