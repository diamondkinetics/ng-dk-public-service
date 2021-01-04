import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopulationDataServiceV3 } from './population-data.service.v3';

@NgModule({
	imports: [CommonModule]
})
export class PopulationDataModuleV3 {

	constructor(@Optional() @SkipSelf() parentModule: PopulationDataModuleV3) {
		if (parentModule) {
			throw new Error('PopulationDataModuleV3 is already loaded. Import it in the ServiceModuleV3 only.');
		}
	}

	static forRoot(): ModuleWithProviders<PopulationDataModuleV3> {
		return {
			ngModule: PopulationDataModuleV3,
			providers: [PopulationDataServiceV3]
		};
	}

}
