import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth.service';

@NgModule({
	imports: [CommonModule],
	declarations: [],
	exports: []
})
export class AuthModule {
	constructor(@Optional() @SkipSelf() parentModule: AuthModule) {
		if (parentModule) {
			throw new Error('AuthModule is already loaded. Import it in the AppModule only.');
		}
	}

	static forRoot(): ModuleWithProviders {
		return {
			ngModule: AuthModule,
			providers: [
				AuthService
			]
		};
	}
}
