import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupServiceV4 } from './group.service.v4';

@NgModule({
	imports: [CommonModule]
})
export class GroupModuleV4 {

	constructor(@Optional() @SkipSelf() parentModule: GroupModuleV4) {
		if (parentModule) {
			throw new Error('GroupModuleV4 is already loaded. Import it in ServiceModuleV4 only.');
		}
	}

	static forRoot(): ModuleWithProviders<GroupModuleV4> {
		return {
			ngModule: GroupModuleV4,
			providers: [GroupServiceV4]
		};
	}

}
