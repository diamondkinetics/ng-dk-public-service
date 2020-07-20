import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionLevelModuleV2 } from './competition-level/competition-level.module.v2';

@NgModule({
	imports: [
		CommonModule
	],
	exports: [
		CompetitionLevelModuleV2
	]
})
export class ServiceModuleV2 {

	constructor(@Optional() @SkipSelf() parentModule: ServiceModuleV2) {
		if (parentModule) {
			throw new Error('ServiceModuleV2 is already loaded. Import it in the ServiceModule only.');
		}
	}

}
