import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupMembershipServiceV4 } from './group-membership.service.v4';

@NgModule({
	imports: [CommonModule]
})
export class GroupMembershipModuleV4 {

	constructor(@Optional() @SkipSelf() parentModule: GroupMembershipModuleV4) {
		if (parentModule) {
			throw new Error('GroupMembershipModuleV4 is already loaded. Import it in ServiceModuleV4 only.');
		}
	}

	static forRoot(): ModuleWithProviders<GroupMembershipModuleV4> {
		return {
			ngModule: GroupMembershipModuleV4,
			providers: [GroupMembershipServiceV4]
		}
	}

}
