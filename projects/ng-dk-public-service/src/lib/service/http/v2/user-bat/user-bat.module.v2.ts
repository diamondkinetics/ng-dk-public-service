import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserBatServiceV2 } from './user-bat.service.v2';

@NgModule({
	imports: [
		CommonModule
	]
})
export class UserBatModuleV2 {

	constructor(@Optional() @SkipSelf() parentModule: UserBatModuleV2) {
		if (parentModule) {
			throw new Error('UserBatModuleV2 is already loaded. Import it in the ServiceModuleV2 only.');
		}
	}

	static forRoot(): ModuleWithProviders<UserBatModuleV2> {
		return {
			ngModule: UserBatModuleV2,
			providers: [
				UserBatServiceV2
			]
		};
	}

}
