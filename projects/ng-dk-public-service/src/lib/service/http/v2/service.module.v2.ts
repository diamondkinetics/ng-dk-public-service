import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionLevelModuleV2 } from './competition-level/competition-level.module.v2';
import { BillingCardModuleV2 } from './billing/card/billing-card.module.v2';
import { BillingSubscriptionModuleV2 } from './billing/subscription/billing-subscription.module.v2';
import { UserBatModuleV2 } from './user-bat/user-bat.module.v2';
import { BatModelModuleV2 } from './bat-model/bat-model.module.v2';
import { OAuthModuleV2 } from './oauth/oauth.module.v2';
import { WebHookModuleV2 } from './web-hook/web-hook.module.v2';

@NgModule({
	imports: [
		CommonModule
	],
	exports: [
		CompetitionLevelModuleV2,
		BillingCardModuleV2,
		BillingSubscriptionModuleV2,
		UserBatModuleV2,
		BatModelModuleV2,
		OAuthModuleV2,
		WebHookModuleV2
	]
})
export class ServiceModuleV2 {

	constructor(@Optional() @SkipSelf() parentModule: ServiceModuleV2) {
		if (parentModule) {
			throw new Error('ServiceModuleV2 is already loaded. Import it in the ServiceModule only.');
		}
	}

}
