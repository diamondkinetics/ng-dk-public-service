import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { AuthService } from 'projects/ng-dk-public-service/src/lib/service/http';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

	public xAuthToken$: Observable<string>;
	public loginForm: FormGroup;
	public emailOrNicknameFormControl: FormControl;
	public passwordFormControl: FormControl;

	constructor(private authService: AuthService, private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.emailOrNicknameFormControl = new FormControl('');
		this.passwordFormControl = new FormControl('');
		this.loginForm = this.formBuilder.group({
			emailOrNickname: this.emailOrNicknameFormControl,
			password: this.passwordFormControl
		});
	}

	public login(): void {
		this.xAuthToken$ = this.authService.login(
			this.loginForm.controls.emailOrNickname.value,
			this.loginForm.controls.password.value);
	}

}
