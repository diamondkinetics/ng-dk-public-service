import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { LocalStorageService } from '../../service/util/local-storage/local-storage.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
	constructor(private localStorageService: LocalStorageService) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const currentJwt = this.localStorageService.getItem(this.localStorageService.getJwtKey());
		const headers = {
			'DK-PLATFORM': 'dkweb'
		};

		if (currentJwt) {
			headers['X-AUTH-TOKEN'] = currentJwt;
		}

		request = request.clone({
			url: environment.apiUrl + request.url,
			setHeaders: headers
		});

		return next.handle(request);
	}
}
