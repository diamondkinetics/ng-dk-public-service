import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from './http/auth/auth.module';
import { ServiceModuleV3 } from './http/v3/service.module.v3';
import { ServiceModuleV2 } from './http/v2/service.module.v2';

@NgModule({
	imports: [CommonModule],
	exports: [
		AuthModule,
		ServiceModuleV3,
		ServiceModuleV2
	]
})
export class ServiceModule {

	constructor(@Optional() @SkipSelf() parentModule: ServiceModule) {
		if (parentModule) {
			throw new Error('ServiceModule is already loaded. Import it in the AppModule only.');
		}
	}

}
