import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountGroupV6Module } from './account-group/account-group-v6.module';
import { UserProfileV6Module } from './user-profile/user-profile-v6.module';
import { SwingScoreV6Module } from './swing-score/swing-score-v6.module';
import { SwingScorePopulationV6Module } from './swing-score-population/swing-score-population-v6.module';

@NgModule({
  imports: [CommonModule],
  exports: [AccountGroupV6Module, UserProfileV6Module, SwingScoreV6Module, SwingScorePopulationV6Module],
})
export class ServiceV6Module {
  constructor(@Optional() @SkipSelf() parentModule: ServiceV6Module) {
    if (parentModule) {
      throw new Error('ServiceV6Module is already loaded. Import it in the ServiceModule only.');
    }
  }
}
