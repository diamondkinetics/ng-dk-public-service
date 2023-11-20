import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { PitchingSessionV6Service } from './pitching-session-v6.service';

@NgModule({
  imports: [CommonModule],
})
export class PitchingSessionV6Module {
  constructor(@Optional() @SkipSelf() parentModule: PitchingSessionV6Module) {
    if (parentModule) {
      throw new Error('PitchingSessionModuleV6 is already loaded. Import it in ServiceModuleV6 only.');
    }
  }

  static forRoot(): ModuleWithProviders<PitchingSessionV6Module> {
    return {
      ngModule: PitchingSessionV6Module,
      providers: [PitchingSessionV6Service],
    };
  }
}
