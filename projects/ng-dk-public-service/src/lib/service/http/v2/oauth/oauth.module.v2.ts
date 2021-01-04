import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OAuthServiceV2 } from './oauth.service.v2';

@NgModule({
	imports: [
		CommonModule
	]
})
export class OAuthModuleV2 {

	constructor(@Optional() @SkipSelf() parentModule: OAuthModuleV2) {
		if (parentModule) {
			throw new Error('OAuthModuleV2 is already loaded. Import it in the ServiceModuleV2 only.');
		}
	}

	static forRoot(): ModuleWithProviders<OAuthModuleV2> {
		return {
			ngModule: OAuthModuleV2,
			providers: [
				OAuthServiceV2
			]
		};
	}

}
