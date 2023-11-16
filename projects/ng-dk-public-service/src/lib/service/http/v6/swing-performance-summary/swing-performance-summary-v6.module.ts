import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { SwingPerformanceSummaryV6Service } from './swing-performance-summary-v6.service';

@NgModule({
  imports: [CommonModule]
})
export class SwingPerformanceSummaryV6Module {
  constructor(@Optional() @SkipSelf() parentModule: SwingPerformanceSummaryV6Module) {
    if (parentModule) {
      throw new Error('SwingPerformanceSummaryV6Module is already loaded. Import it in ServiceV6Module only.');
    }
  }

  static forRoot(): ModuleWithProviders<SwingPerformanceSummaryV6Module> {
    return {
      ngModule: SwingPerformanceSummaryV6Module,
      providers: [SwingPerformanceSummaryV6Service]
    }
  }
}
