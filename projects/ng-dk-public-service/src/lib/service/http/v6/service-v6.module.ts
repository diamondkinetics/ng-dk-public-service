import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountGroupV6Module } from './account-group/account-group-v6.module';
import { UserProfileV6Module } from './user-profile/user-profile-v6.module';
import { SwingScoreV6Module } from './swing-score/swing-score-v6.module';
import { SwingScorePopulationV6Module } from './swing-score-population/swing-score-population-v6.module';
import { ItemV6Module } from './item/item-v6.module';
import { SwingPerformanceSummaryV6Module } from './swing-performance-summary/swing-performance-summary-v6.module';
import { BattingSessionV6Module } from './batting-session/batting-session-v6.module';
import { PitchingSessionV6Module } from './pitching-session/pitching-session-v6.module';
import { SwingV6Module } from './swing/swing-v6.module';
import { PitchV6Module } from './pitch/pitch-v6.module';
import { ChallengeV6Module } from './challenge/challenge-v6.module';
import { ChallengeProgressV6Module } from './challenge-progress/challenge-progress-v6.module';
import { UserToUserConnectionV6Module } from './user-to-user-connection/user-to-user-connection-v6.module';
import { UserActivityV6Module } from './user-activity/user-activity-v6.module';

@NgModule({
  imports: [CommonModule],
  exports: [
    AccountGroupV6Module,
    UserProfileV6Module,
    SwingScoreV6Module,
    SwingScorePopulationV6Module,
    ItemV6Module,
    SwingPerformanceSummaryV6Module,
    BattingSessionV6Module,
    PitchingSessionV6Module,
    SwingV6Module,
    PitchV6Module,
    ChallengeV6Module,
    ChallengeProgressV6Module,
    UserToUserConnectionV6Module,
    UserActivityV6Module,
  ],
})
export class ServiceV6Module {
  constructor(@Optional() @SkipSelf() parentModule: ServiceV6Module) {
    if (parentModule) {
      throw new Error('ServiceV6Module is already loaded. Import it in the ServiceModule only.');
    }
  }
}
