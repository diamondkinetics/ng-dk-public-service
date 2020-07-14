import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BattingSessionServiceV3 } from './batting-session.service.v3';

@NgModule({
	imports: [CommonModule]
})
export class BattingSessionModuleV3 {

	constructor(@Optional() @SkipSelf() parentModule: BattingSessionModuleV3) {
		if (parentModule) {
			throw new Error('BattingSessionModuleV3 is already loaded. Import it in the ServiceModuleV3 only.');
		}
	}

	static forRoot(): ModuleWithProviders<BattingSessionModuleV3> {
		return {
			ngModule: BattingSessionModuleV3,
			providers: [BattingSessionServiceV3]
		};
	}

}
