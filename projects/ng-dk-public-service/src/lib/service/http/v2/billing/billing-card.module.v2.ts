import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingCardServiceV2 } from './billing-card.service.v2';

@NgModule({
	imports: [
		CommonModule
	]
})
export class BillingCardModuleV2 {

	constructor(@Optional() @SkipSelf() parentModule: BillingCardModuleV2) {
		if (parentModule) {
			throw new Error('BillingCardModuleV2 is already loaded. Import it in the ServiceModuleV2 only.');
		}
	}

	static forRoot(): ModuleWithProviders<BillingCardModuleV2> {
		return {
			ngModule: BillingCardModuleV2,
			providers: [
				BillingCardServiceV2
			]
		};
	}

}
