/*
 * Public API Surface of ng-dk-public-service
 */

/////////////////////////////////////////////////////////////////////////////////////
//                                  No version
/////////////////////////////////////////////////////////////////////////////////////
export * from './lib/enum/resource-mapping.enum';
export * from './lib/service/service.module';
export * from './lib/service/http/auth/auth.module';
export * from './lib/service/http/auth/auth.service';
export * from './lib/service/http/abstract-resource.service';
export * from './lib/service/http/abstract-sensor-session.service';

/////////////////////////////////////////////////////////////////////////////////////
//                                      V4
/////////////////////////////////////////////////////////////////////////////////////
export * from './lib/service/http/v4/service.module.v4';
export * from './lib/service/http/v4/group/group.module.v4';
export * from './lib/service/http/v4/group/group.service.v4';
export * from './lib/service/http/v4/group-membership/group-membership.module.v4';
export * from './lib/service/http/v4/group-membership/group-membership.service.v4';

/////////////////////////////////////////////////////////////////////////////////////
//                                      V3
/////////////////////////////////////////////////////////////////////////////////////
export * from './lib/service/http/v3/service.module.v3';
export * from './lib/service/http/v3/user-profile/user-profile.module.v3';
export * from './lib/service/http/v3/user-profile/user-profile.service.v3';
export * from './lib/service/http/v3/batting-session/batting-session.module.v3';
export * from './lib/service/http/v3/batting-session/batting-session.service.v3';
export * from './lib/service/http/v3/pitching-session/pitching-session.module.v3';
export * from './lib/service/http/v3/pitching-session/pitching-session.service.v3';
export * from './lib/service/http/v3/population-data/population-data.module.v3';
export * from './lib/service/http/v3/population-data/population-data.service.v3';

/////////////////////////////////////////////////////////////////////////////////////
//                                      V2
/////////////////////////////////////////////////////////////////////////////////////
export * from './lib/service/http/v2/service.module.v2';
export * from './lib/service/http/v2/competition-level/competition-level.module.v2';
export * from './lib/service/http/v2/competition-level/competition-level.service.v2';
export * from './lib/service/http/v2/billing/card/billing-card.module.v2';
export * from './lib/service/http/v2/billing/card/billing-card.service.v2';
export * from './lib/service/http/v2/billing/subscription/billing-subscription.module.v2';
export * from './lib/service/http/v2/billing/subscription/billing-subscription.service.v2';
export * from './lib/service/http/v2/user-bat/user-bat.module.v2';
export * from './lib/service/http/v2/user-bat/user-bat.service.v2';
export * from './lib/service/http/v2/bat-model/bat-model.module.v2';
export * from './lib/service/http/v2/bat-model/bat-model.service.v2';
export * from './lib/service/http/v2/oauth/oauth.module.v2';
export * from './lib/service/http/v2/oauth/oauth.service.v2';
export * from './lib/service/http/v2/web-hook/web-hook.module.v2';
export * from './lib/service/http/v2/web-hook/web-hook.service.v2';
export * from './lib/service/http/v2/leaderboard/leaderboard.module.v2';
export * from './lib/service/http/v2/leaderboard/leaderboard.service.v2';
