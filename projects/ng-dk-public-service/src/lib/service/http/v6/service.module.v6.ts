import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountGroupModuleV6 } from './account-group/account-group.module.v6';
import { UserProfileModuleV6 } from './user-profile/user-profile.module.v6';

@NgModule({
	imports: [CommonModule],
	exports: [
    AccountGroupModuleV6,
    UserProfileModuleV6
  ]
})
export class ServiceModuleV6 {

	constructor(@Optional() @SkipSelf() parentModule: ServiceModuleV6) {
		if (parentModule) {
			throw new Error('ServiceModuleV6 is already loaded. Import it in the ServiceModule only.');
		}
	}

}
