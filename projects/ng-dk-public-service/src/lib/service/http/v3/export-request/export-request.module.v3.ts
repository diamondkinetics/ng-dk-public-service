import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { ExportRequestServiceV3 } from './export-request.service.v3';

@NgModule({
	imports: [ CommonModule ]
})
export class ExportRequestModuleV3 {

	constructor(@Optional() @SkipSelf() parentModule: ExportRequestModuleV3) {
		if (parentModule) {
			throw new Error('ExportRequestModuleV3 is already loaded. Import it in ServiceModuleV3 only.');
		}
	}

	static forRoot(): ModuleWithProviders<ExportRequestModuleV3> {
		return {
			ngModule: ExportRequestModuleV3,
			providers: [ ExportRequestServiceV3 ]
		};
	}

}
