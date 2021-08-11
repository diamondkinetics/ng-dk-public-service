import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BattingSessionModuleV3 } from './batting-session/batting-session.module.v3';
import { PitchingSessionModuleV3 } from './pitching-session/pitching-session.module.v3';
import { UserProfileModuleV3 } from './user-profile/user-profile.module.v3';
import { ExportRequestModuleV3 } from './export-request/export-request.module.v3';

@NgModule({
	imports: [CommonModule],
	exports: [
		UserProfileModuleV3,
		BattingSessionModuleV3,
		PitchingSessionModuleV3,
		ExportRequestModuleV3
	]
})
export class ServiceModuleV3 {

	constructor(@Optional() @SkipSelf() parentModule: ServiceModuleV3) {
		if (parentModule) {
			throw new Error('ServiceModuleV3 is already loaded. Import it in the ServiceModule only.');
		}
	}

}
