import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { SwingScoreV6Service } from './swing-score-v6.service';

@NgModule({
  imports: [CommonModule]
})
export class SwingScoreV6Module {
  constructor(@Optional() @SkipSelf() parentModule: SwingScoreV6Module) {
    if (parentModule) {
      throw new Error('SwingScoreV6Module is already loaded. Import it in ServiceV6Module only.');
    }
  }

  static forRoot(): ModuleWithProviders<SwingScoreV6Module> {
    return {
      ngModule: SwingScoreV6Module,
      providers: [SwingScoreV6Service]
    }
  }
}
