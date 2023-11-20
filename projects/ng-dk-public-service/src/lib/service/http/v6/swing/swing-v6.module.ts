import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { SwingV6Service } from './swing-v6.service';

@NgModule({
  imports: [CommonModule],
})
export class SwingV6Module {
  constructor(@Optional() @SkipSelf() parentModule: SwingV6Module) {
    if (parentModule) {
      throw new Error('SwingModuleV6 is already loaded. Import it in ServiceModuleV6 only.');
    }
  }

  static forRoot(): ModuleWithProviders<SwingV6Module> {
    return {
      ngModule: SwingV6Module,
      providers: [SwingV6Service],
    };
  }
}
