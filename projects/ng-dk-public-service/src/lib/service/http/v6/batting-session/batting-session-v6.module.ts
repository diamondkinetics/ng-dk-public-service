import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { BattingSessionV6Service } from './batting-session-v6.service';

@NgModule({
  imports: [CommonModule],
})
export class BattingSessionV6Module {
  constructor(@Optional() @SkipSelf() parentModule: BattingSessionV6Module) {
    if (parentModule) {
      throw new Error('BattingSessionModuleV6 is already loaded. Import it in ServiceModuleV6 only.');
    }
  }

  static forRoot(): ModuleWithProviders<BattingSessionV6Module> {
    return {
      ngModule: BattingSessionV6Module,
      providers: [BattingSessionV6Service],
    };
  }
}
