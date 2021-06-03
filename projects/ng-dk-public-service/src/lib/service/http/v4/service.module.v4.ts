import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupModuleV4 } from './group/group.module.v4';
import { GroupMembershipModuleV4 } from './group-membership/group-membership.module.v4';

@NgModule({
	imports: [CommonModule],
	exports: [
		GroupModuleV4,
		GroupMembershipModuleV4
	]
})
export class ServiceModuleV4 {

	constructor(@Optional() @SkipSelf() parentModule: ServiceModuleV4) {
		if (parentModule) {
			throw new Error('ServiceModuleV4 is already loaded. Import it in the ServiceModule only.');
		}
	}

}
