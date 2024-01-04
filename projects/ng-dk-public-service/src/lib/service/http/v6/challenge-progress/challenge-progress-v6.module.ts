import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { ChallengeProgressV6Service } from './challenge-progress-v6.service';

@NgModule({
  imports: [CommonModule],
})
export class ChallengeProgressV6Module {
  constructor(@Optional() @SkipSelf() parentModule: ChallengeProgressV6Module) {
    if (parentModule) {
      throw new Error('ChallengeProgressV6Module is already loaded. Import it in ServiceModuleV6 only.');
    }
  }

  public static forRoot(): ModuleWithProviders<ChallengeProgressV6Module> {
    return {
      ngModule: ChallengeProgressV6Module,
      providers: [ChallengeProgressV6Service],
    };
  }
}
