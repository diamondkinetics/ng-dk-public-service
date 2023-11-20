import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { PitchV6Service } from './pitch-v6.service';

@NgModule({
  imports: [CommonModule],
})
export class PitchV6Module {
  constructor(@Optional() @SkipSelf() parentModule: PitchV6Module) {
    if (parentModule) {
      throw new Error('PitchModuleV6 is already loaded. Import it in ServiceModuleV6 only.');
    }
  }

  static forRoot(): ModuleWithProviders<PitchV6Module> {
    return {
      ngModule: PitchV6Module,
      providers: [PitchV6Service],
    };
  }
}
