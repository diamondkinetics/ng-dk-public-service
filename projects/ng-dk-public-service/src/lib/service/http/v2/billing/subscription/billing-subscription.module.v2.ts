import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingSubscriptionServiceV2 } from './billing-subscription.service.v2';

@NgModule({
	imports: [
		CommonModule
	]
})
export class BillingSubscriptionModuleV2 {

	constructor(@Optional() @SkipSelf() parentModule: BillingSubscriptionModuleV2) {
		if (parentModule) {
			throw new Error('BillingSubscriptionModuleV2 is already loaded. Import it in the ServiceModuleV2 only.');
		}
	}

	static forRoot(): ModuleWithProviders<BillingSubscriptionModuleV2> {
		return {
			ngModule: BillingSubscriptionModuleV2,
			providers: [
				BillingSubscriptionServiceV2
			]
		};
	}

}
