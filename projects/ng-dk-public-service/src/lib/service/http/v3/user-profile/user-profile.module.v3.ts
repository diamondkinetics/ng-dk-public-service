import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileServiceV3 } from './user-profile.service.v3';

@NgModule({
	imports: [CommonModule]
})
export class UserProfileModuleV3 {

	constructor(@Optional() @SkipSelf() parentModule: UserProfileModuleV3) {
		if (parentModule) {
			throw new Error('UserProfileModuleV3 is already loaded. Import it in the ServiceModuleV3 only.');
		}
	}

	static forRoot(): ModuleWithProviders<UserProfileModuleV3> {
		return {
			ngModule: UserProfileModuleV3,
			providers: [UserProfileServiceV3]
		};
	}

}
