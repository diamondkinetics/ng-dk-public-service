/*
 * Public API Surface of ng-dk-public-service
 */

/////////////////////////////////////////////////////////////////////////////////////
//                                  No version
/////////////////////////////////////////////////////////////////////////////////////
export { ResourceMapping } from './lib/enum/resource-mapping.enum';
export { ServiceModule } from './lib/service/service.module';
export { AuthModule } from './lib/service/http/auth/auth.module';
export { AuthService } from './lib/service/http/auth/auth.service';
export { AbstractResourceService } from './lib/service/http/abstract-resource.service';
export { AbstractSensorSessionService } from './lib/service/http/abstract-sensor-session.service';
export { AbstractRequestResponseResourceService } from './lib/service/http/abstract-request-response-resource.service';

/////////////////////////////////////////////////////////////////////////////////////
//                                      V6
/////////////////////////////////////////////////////////////////////////////////////
export { ServiceV6Module } from './lib/service/http/v6/service-v6.module';
export { AccountGroupV6Module } from './lib/service/http/v6/account-group/account-group-v6.module';
export { AccountGroupV6Service } from './lib/service/http/v6/account-group/account-group-v6.service';
export { UserProfileV6Module } from './lib/service/http/v6/user-profile/user-profile-v6.module';
export { UserProfileV6Service } from './lib/service/http/v6/user-profile/user-profile-v6.service';
export { CompetitionLevelV6Module } from './lib/service/http/v6/competition-level/competition-level-v6.module';
export { CompetitionLevelV6Service } from './lib/service/http/v6/competition-level/competition-level-v6.service';
export { SwingScoreV6Module } from './lib/service/http/v6/swing-score/swing-score-v6.module';
export { SwingScoreV6Service } from './lib/service/http/v6/swing-score/swing-score-v6.service';
export { SwingScorePopulationV6Module } from './lib/service/http/v6/swing-score-population/swing-score-population-v6.module';
export { SwingScorePopulationV6Service } from './lib/service/http/v6/swing-score-population/swing-score-population-v6.service';
export { ItemV6Module } from './lib/service/http/v6/item/item-v6.module';
export { ItemV6Service } from './lib/service/http/v6/item/item-v6.service';
export { SwingPerformanceSummaryV6Module } from './lib/service/http/v6/swing-performance-summary/swing-performance-summary-v6.module';
export { SwingPerformanceSummaryV6Service } from './lib/service/http/v6/swing-performance-summary/swing-performance-summary-v6.service';
export { BattingSessionV6Module } from './lib/service/http/v6/batting-session/batting-session-v6.module';
export { BattingSessionV6Service } from './lib/service/http/v6/batting-session/batting-session-v6.service';
export { PitchingSessionV6Module } from './lib/service/http/v6/pitching-session/pitching-session-v6.module';
export { PitchingSessionV6Service } from './lib/service/http/v6/pitching-session/pitching-session-v6.service';
export { SwingV6Module } from './lib/service/http/v6/swing/swing-v6.module';
export { SwingV6Service } from './lib/service/http/v6/swing/swing-v6.service';
export { PitchV6Module } from './lib/service/http/v6/pitch/pitch-v6.module';
export { PitchV6Service } from './lib/service/http/v6/pitch/pitch-v6.service';

/////////////////////////////////////////////////////////////////////////////////////
//                                      V4
/////////////////////////////////////////////////////////////////////////////////////
export { ServiceModuleV4 } from './lib/service/http/v4/service.module.v4';
export { GroupModuleV4 } from './lib/service/http/v4/group/group.module.v4';
export { GroupServiceV4 } from './lib/service/http/v4/group/group.service.v4';
export { GroupMembershipModuleV4 } from './lib/service/http/v4/group-membership/group-membership.module.v4';
export { GroupMembershipServiceV4 } from './lib/service/http/v4/group-membership/group-membership.service.v4';

/////////////////////////////////////////////////////////////////////////////////////
//                                      V3
/////////////////////////////////////////////////////////////////////////////////////
export { ServiceModuleV3 } from './lib/service/http/v3/service.module.v3';
export { UserProfileModuleV3 } from './lib/service/http/v3/user-profile/user-profile.module.v3';
export { UserProfileServiceV3 } from './lib/service/http/v3/user-profile/user-profile.service.v3';
export { BattingSessionModuleV3 } from './lib/service/http/v3/batting-session/batting-session.module.v3';
export { BattingSessionServiceV3 } from './lib/service/http/v3/batting-session/batting-session.service.v3';
export { PitchingSessionModuleV3 } from './lib/service/http/v3/pitching-session/pitching-session.module.v3';
export { PitchingSessionServiceV3 } from './lib/service/http/v3/pitching-session/pitching-session.service.v3';
export { PopulationDataModuleV3 } from './lib/service/http/v3/population-data/population-data.module.v3';
export { PopulationDataServiceV3 } from './lib/service/http/v3/population-data/population-data.service.v3';
export { ExportRequestModuleV3 } from './lib/service/http/v3/export-request/export-request.module.v3';
export { ExportRequestServiceV3 } from './lib/service/http/v3/export-request/export-request.service.v3';

/////////////////////////////////////////////////////////////////////////////////////
//                                      V2
/////////////////////////////////////////////////////////////////////////////////////
export { ServiceModuleV2 } from './lib/service/http/v2/service.module.v2';
export { CompetitionLevelModuleV2 } from './lib/service/http/v2/competition-level/competition-level.module.v2';
export { CompetitionLevelServiceV2 } from './lib/service/http/v2/competition-level/competition-level.service.v2';
export { BillingCardModuleV2 } from './lib/service/http/v2/billing/card/billing-card.module.v2';
export { BillingCardServiceV2 } from './lib/service/http/v2/billing/card/billing-card.service.v2';
export { BillingSubscriptionModuleV2 } from './lib/service/http/v2/billing/subscription/billing-subscription.module.v2';
export { BillingSubscriptionServiceV2 } from './lib/service/http/v2/billing/subscription/billing-subscription.service.v2';
export { UserBatModuleV2 } from './lib/service/http/v2/user-bat/user-bat.module.v2';
export { UserBatServiceV2 } from './lib/service/http/v2/user-bat/user-bat.service.v2';
export { BatModelModuleV2 } from './lib/service/http/v2/bat-model/bat-model.module.v2';
export { BatModelServiceV2 } from './lib/service/http/v2/bat-model/bat-model.service.v2';
export { OAuthModuleV2 } from './lib/service/http/v2/oauth/oauth.module.v2';
export { OAuthServiceV2 } from './lib/service/http/v2/oauth/oauth.service.v2';
export { WebHookModuleV2 } from './lib/service/http/v2/web-hook/web-hook.module.v2';
export { WebHookServiceV2 } from './lib/service/http/v2/web-hook/web-hook.service.v2';
export { LeaderboardModuleV2 } from './lib/service/http/v2/leaderboard/leaderboard.module.v2';
export { LeaderboardServiceV2 } from './lib/service/http/v2/leaderboard/leaderboard.service.v2';
