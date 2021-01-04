import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebHookServiceV2 } from './web-hook.service.v2';

@NgModule({
	imports: [
		CommonModule
	]
})
export class WebHookModuleV2 {

	constructor(@Optional() @SkipSelf() parentModule: WebHookModuleV2) {
		if (parentModule) {
			throw new Error('OAuthModuleV2 is already loaded. Import it in the ServiceModuleV2 only.');
		}
	}

	static forRoot(): ModuleWithProviders<WebHookModuleV2> {
		return {
			ngModule: WebHookModuleV2,
			providers: [
				WebHookServiceV2
			]
		};
	}

}
