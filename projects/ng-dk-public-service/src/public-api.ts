/*
 * Public API Surface of ng-dk-public-service
 */

/////////////////////////////////////////////////////////////////////////////////////
//                                  No version
/////////////////////////////////////////////////////////////////////////////////////
export * from './lib/enum/resource-mappings.enum';
export * from './lib/service/service.module';
export * from './lib/service/http/auth/auth.module';
export * from './lib/service/http/auth/auth.service';
export * from './lib/service/http/abstract-resource.service';
export * from './lib/service/http/abstract-sensor-session.service';

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

/////////////////////////////////////////////////////////////////////////////////////
//                                      V2
/////////////////////////////////////////////////////////////////////////////////////
export * from './lib/service/http/v2/competition-level/competition-level.module.v2';
export * from './lib/service/http/v2/competition-level/competition-level.service.v2';
export * from './lib/service/http/v2/billing/card/billing-card.module.v2';
export * from './lib/service/http/v2/billing/card/billing-card.service.v2';
export * from './lib/service/http/v2/billing/subscription/billing-subscription.module.v2';
export * from './lib/service/http/v2/billing/subscription/billing-subscription.service.v2';
