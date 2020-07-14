import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap, flatMap } from 'rxjs/operators';

import { PitchingSessionDTOV3 } from '@diamondkinetics/dk-public-dto-ts';

import { AuthService } from '~lib/service/http/auth/auth.service';
import { PitchingSessionServiceV3 } from '~lib/service/http/v3/pitching-session/pitching-session.service.v3';
import { LocalStorageService } from '~app/service/util/local-storage/local-storage.service';

@Component({
	templateUrl: './pitching-session.component.html',
	styleUrls: [],
	selector: 'app-pitching-session'
})
export class PitchingSessionComponent {

	@Input() public loginForm: FormGroup;
	public pitchingSessions$: Observable<PitchingSessionDTOV3[]>;

	constructor(
		private authService: AuthService,
		private pitchingSessionService: PitchingSessionServiceV3,
		private localStorageService: LocalStorageService
	) {}

	public getAllForUser(): void {
		if (this.loginForm.invalid) {
			return;
		}

		this.pitchingSessions$ = this.authService.login(
			this.loginForm.controls.emailOrNickname.value,
			this.loginForm.controls.password.value
		).pipe(
			tap((xAuthToken: string) => {
				this.localStorageService.setItem(this.localStorageService.getJwtKey(), xAuthToken);
			}),
			flatMap(() => this.pitchingSessionService.getAllForUser())
		);
	}

}
