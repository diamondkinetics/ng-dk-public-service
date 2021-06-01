import { HTTP_INTERCEPTORS, HttpResponse, HttpHeaders } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import {
	UserProfileDTOV3,
	RegisterWithProfileRequestDTOV3,
	ResetPasswordRequestDTO,
	LoggedInUserDTO
} from '@diamondkinetics/dk-public-dto-ts';

import { RequestInterceptor } from '~test/util/request-interceptor/request.interceptor';
import { environment } from '~test/environments/environment';
import { UserProfileServiceV3 } from '~lib/service/http/v3/user-profile/user-profile.service.v3';
import { Provider } from '@angular/core';

describe('UserProfileServiceV3', () => {
	let httpTestingController: HttpTestingController;
	let service: UserProfileServiceV3;

	const requestInterceptorProvider: Provider = {
		provide: HTTP_INTERCEPTORS,
		useClass: RequestInterceptor,
		multi: true
	};
	
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				UserProfileServiceV3,
				requestInterceptorProvider
			]
		});
	});
});
