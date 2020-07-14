import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PitchingSessionServiceV3 } from './pitching-session.service.v3';

@NgModule({
	imports: [CommonModule]
})
export class PitchingSessionModuleV3 {

	constructor(@Optional() @SkipSelf() parentModule: PitchingSessionModuleV3) {
		if (parentModule) {
			throw new Error('PitchingSessionModuleV3 is already loaded. Import it in the ServiceModuleV3 only.');
		}
	}

	static forRoot(): ModuleWithProviders<PitchingSessionModuleV3> {
		return {
			ngModule: PitchingSessionModuleV3,
			providers: [PitchingSessionServiceV3]
		};
	}

}
