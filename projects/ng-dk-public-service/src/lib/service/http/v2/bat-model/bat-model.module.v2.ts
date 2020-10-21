import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatModelServiceV2 } from './bat-model.service.v2';

@NgModule({
	imports: [
		CommonModule
	]
})
export class BatModelModuleV2 {

	constructor(@Optional() @SkipSelf() parentModule: BatModelModuleV2) {
		if (parentModule) {
			throw new Error('BatModelModuleV2 is already loaded. Import it in the ServiceModuleV2 only.');
		}
	}

	static forRoot(): ModuleWithProviders<BatModelModuleV2> {
		return {
			ngModule: BatModelModuleV2,
			providers: [
				BatModelServiceV2
			]
		};
	}

}
