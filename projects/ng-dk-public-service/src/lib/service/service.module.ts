import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from './http/auth/auth.module';
import { ServiceModuleV6 } from './http/v6/service.module.v6';
import { ServiceModuleV4 } from './http/v4/service.module.v4';
import { ServiceModuleV3 } from './http/v3/service.module.v3';
import { ServiceModuleV2 } from './http/v2/service.module.v2';

@NgModule({
	imports: [CommonModule],
	exports: [
		AuthModule,
    ServiceModuleV6,
		ServiceModuleV4,
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
