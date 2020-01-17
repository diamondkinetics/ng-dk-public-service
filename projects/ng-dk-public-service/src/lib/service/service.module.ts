import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from './http/auth/auth.module';

@NgModule({
	imports: [
		CommonModule,
		AuthModule
	],
	declarations: [],
	exports: []
})
export class ServiceModule {
	constructor(@Optional() @SkipSelf() parentModule: ServiceModule) {
		if (parentModule) {
			throw new Error('ServiceModule is already loaded. Import it in the AppModule only.');
		}
	}
}
