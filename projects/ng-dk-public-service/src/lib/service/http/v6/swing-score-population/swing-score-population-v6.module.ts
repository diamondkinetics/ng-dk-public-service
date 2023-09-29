import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { SwingScorePopulationV6Service } from './swing-score-population-v6.service';

@NgModule({
  imports: [CommonModule]
})
export class SwingScorePopulationV6Module {
  constructor(@Optional() @SkipSelf() parentModule: SwingScorePopulationV6Module) {
    if (parentModule) {
      throw new Error('SwingScorePopulationV6Module is already loaded. Import it in ServiceV6Module only.');
    }
  }

  static forRoot(): ModuleWithProviders<SwingScorePopulationV6Module> {
    return {
      ngModule: SwingScorePopulationV6Module,
      providers: [SwingScorePopulationV6Service]
    }
  }
}
