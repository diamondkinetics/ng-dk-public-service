import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BattingSessionModuleV3 } from './batting-session/batting-session.module.v3';
import { PitchingSessionModuleV3 } from './pitching-session/pitching-session.module.v3';

@NgModule({
	imports: [CommonModule],
	exports: [
		BattingSessionModuleV3,
		PitchingSessionModuleV3
	]
})
export class ServiceModuleV3 {

	constructor(@Optional() @SkipSelf() parentModule: ServiceModuleV3) {
		if (parentModule) {
			throw new Error('ServiceModuleV3 is already loaded. Import it in the ServiceModule only.');
		}
	}

}
