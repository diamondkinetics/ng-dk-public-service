import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionLevelServiceV2 } from './competition-level.service.v2';

@NgModule({
	imports: [
		CommonModule
	]
})
export class CompetitionLevelModuleV2 {

	constructor(@Optional() @SkipSelf() parentModule: CompetitionLevelModuleV2) {
		if (parentModule) {
			throw new Error('CompetitionLevelModuleV2 is already loaded. Import it in the ServiceModuleV2 only.');
		}
	}

	static forRoot(): ModuleWithProviders<CompetitionLevelModuleV2> {
		return {
			ngModule: CompetitionLevelModuleV2,
			providers: [
				CompetitionLevelServiceV2
			]
		};
	}

}
