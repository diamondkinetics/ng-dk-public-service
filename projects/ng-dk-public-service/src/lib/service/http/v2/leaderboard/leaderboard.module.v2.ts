import { CommonModule } from '@angular/common';
import {
	ModuleWithProviders,
	SkipSelf,
	NgModule,
	Optional
} from '@angular/core';
import { LeaderboardServiceV2 } from './leaderboard.service.v2';

@NgModule({
	imports: [CommonModule],
})
export class LeaderboardModuleV2 {

	constructor(@Optional() @SkipSelf() parentModule: LeaderboardModuleV2) {
		if (parentModule) {
			throw new Error(
				"LeaderboardModuleV2 is already loaded. Import it in the ServiceModuleV2 only."
			);
		}
	}

	static forRoot(): ModuleWithProviders<LeaderboardModuleV2> {
		return {
			ngModule: LeaderboardModuleV2,
			providers: [LeaderboardServiceV2],
		};
	}

}
