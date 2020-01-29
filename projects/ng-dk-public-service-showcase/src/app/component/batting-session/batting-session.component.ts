import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap, flatMap } from 'rxjs/operators';

import { BattingSessionDTOV3 } from '@diamondkinetics/dk-public-dto-ts';

import { AuthService } from 'projects/ng-dk-public-service/src/lib/service/http/auth/auth.service';
import {
	BattingSessionServiceV3
} from 'projects/ng-dk-public-service/src/lib/service/http/v3/batting-session/batting-session.service.v3';
import { LocalStorageService } from './../../service/util/local-storage/local-storage.service';

@Component({
	templateUrl: './batting-session.component.html',
	styleUrls: [],
	selector: 'app-batting-session'
})
export class BattingSessionComponent {

	@Input() public loginForm: FormGroup;
	public battingSessions$: Observable<BattingSessionDTOV3[]>;

	constructor(
		private authService: AuthService,
		private battingSessionService: BattingSessionServiceV3,
		private localStorageService: LocalStorageService
	) {}

	public getAllForUser(): void {
		if (this.loginForm.invalid) {
			return;
		}

		this.battingSessions$ = this.authService.login(
			this.loginForm.controls.emailOrNickname.value,
			this.loginForm.controls.password.value
		).pipe(
			tap((xAuthToken: string) => {
				this.localStorageService.setItem(this.localStorageService.getJwtKey(), xAuthToken);
			}),
			flatMap(() => this.battingSessionService.getAllForUser())
		);
	}

}
