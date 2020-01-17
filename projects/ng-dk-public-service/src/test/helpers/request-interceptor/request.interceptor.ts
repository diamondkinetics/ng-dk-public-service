import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
	constructor() { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const headers = {
			'DK-PLATFORM': 'dkweb'
		};

		request = request.clone({
			url: environment.apiUrl + request.url,
			setHeaders: headers
		});

		return next.handle(request);
	}
}
