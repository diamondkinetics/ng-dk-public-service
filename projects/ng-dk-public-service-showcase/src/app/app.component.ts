import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { AuthService } from '@lib/service/http/auth/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	public result$: Observable<string>;
	public loginForm: FormGroup;
	public emailOrNicknameFormControl: FormControl;
	public passwordFormControl: FormControl;

	constructor(private authService: AuthService, private formBuilder: FormBuilder) { }

	ngOnInit() {
		this.emailOrNicknameFormControl = new FormControl('', [Validators.required]);
		this.passwordFormControl = new FormControl('', [Validators.required]);
		this.loginForm = this.formBuilder.group({
			emailOrNickname: this.emailOrNicknameFormControl,
			password: this.passwordFormControl
		});
	}

	public login(): void {
		if (this.loginForm.invalid) {
			return;
		}

		this.result$ = this.authService.login(
			this.loginForm.controls.emailOrNickname.value,
			this.loginForm.controls.password.value
		).pipe(
			map((xAuthToken: string): string => 'success'),
			catchError((err: any): Observable<string> => of('failure'))
		);
	}

}
