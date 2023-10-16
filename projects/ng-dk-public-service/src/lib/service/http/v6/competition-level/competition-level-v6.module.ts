import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CompetitionLevelV6Service } from './competition-level-v6.service';

@NgModule({
  imports: [CommonModule]
})
export class CompetitionLevelV6Module {
  constructor(@Optional() @SkipSelf() parentModule: CompetitionLevelV6Module) {
    if (parentModule) {
      throw new Error('CompetitionLevelV6Module is already loaded. Import it in ServiceModuleV6 only.');
    }
  }

  static forRoot(): ModuleWithProviders<CompetitionLevelV6Module> {
    return {
      ngModule: CompetitionLevelV6Module,
      providers: [CompetitionLevelV6Service]
    }
  }
}
