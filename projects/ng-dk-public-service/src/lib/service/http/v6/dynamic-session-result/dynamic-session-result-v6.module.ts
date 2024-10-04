import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { DynamicSessionResultV6Service } from './dynamic-session-result-v6.service';

@NgModule({
  imports: [CommonModule],
})
export class DynamicSessionResultV6Module {
  constructor(@Optional() @SkipSelf() parentModule: DynamicSessionResultV6Module) {
    if (parentModule) {
      throw new Error('DynamicSessionResultV6Module is already loaded. Import it in ServiceModuleV6 only.');
    }
  }

  public static forRoot(): ModuleWithProviders<DynamicSessionResultV6Module> {
    return {
      ngModule: DynamicSessionResultV6Module,
      providers: [DynamicSessionResultV6Service],
    };
  }
}
