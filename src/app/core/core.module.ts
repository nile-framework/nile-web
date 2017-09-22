import { NgModule } from '@angular/core';

// import { EffectsModule } from '@ngrx/effects';

// import { AppEffects } from './store/app.effects';
import { SharedModule } from '../shared/shared.module';
import { LoadingComponent } from './loading/loading.component';
import { CoreService } from './core.service';

@NgModule({
  imports: [
    SharedModule,
    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    // EffectsModule.forFeature([AppEffects]),
  ],
  declarations: [
    LoadingComponent
  ],
  entryComponents: [
    LoadingComponent
  ],
  providers: [
    CoreService
  ]
})
export class CoreModule { }
