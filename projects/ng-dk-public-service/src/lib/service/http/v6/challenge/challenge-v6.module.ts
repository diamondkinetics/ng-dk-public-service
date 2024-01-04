import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { ChallengeV6Service } from './challenge-v6.service';

@NgModule({
  imports: [CommonModule],
})
export class ChallengeV6Module {
  constructor(@Optional() @SkipSelf() parentModule: ChallengeV6Service) {
    if (parentModule) {
      throw new Error('ChallengeV6Module is already loaded. Import it in ServiceModuleV6 only.');
    }
  }

  public static forRoot(): ModuleWithProviders<ChallengeV6Module> {
    return {
      ngModule: ChallengeV6Module,
      providers: [ChallengeV6Service],
    };
  }
}
