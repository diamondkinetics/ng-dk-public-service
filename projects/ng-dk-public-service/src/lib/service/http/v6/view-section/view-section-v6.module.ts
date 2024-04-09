import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { ViewSectionV6Service } from './view-section-v6.service';

@NgModule({
  imports: [CommonModule],
})
export class ViewSectionV6Module {
  constructor(@Optional() @SkipSelf() parentModule: ViewSectionV6Module) {
    if (parentModule) {
      throw new Error('ViewSectionV6Module is already loaded. Import it in ServiceModuleV6 only.');
    }
  }

  static forRoot(): ModuleWithProviders<ViewSectionV6Module> {
    return {
      ngModule: ViewSectionV6Module,
      providers: [ViewSectionV6Service],
    };
  }
}
