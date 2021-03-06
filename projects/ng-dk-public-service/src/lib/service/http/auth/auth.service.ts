import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const AUTH_TOKEN_HEADER = 'X-AUTH-TOKEN';

@Injectable({ providedIn: 'root' })
export class AuthService {
	constructor(private http: HttpClient) { }

	/**
	 * Authenticates a user with the provided information and when successful, the API returns a response containing
	 * an X-AUTH-TOKEN header. This token is to be used to make any subsequent requests that require authorization,
	 * which can be implemented with something like a request interceptor.
	 *
	 * @param   emailOrNickname The email or nickname to authenticate the user with.
	 * @param   password        The password to authenticate the user with.
	 * @returns                 An observable containing the value from the X-AUTH-TOKEN response header.
	 */
	public login(emailOrNickname: string, password: string): Observable<string> {
		return this.http
			.post<HttpResponse<object>>(
				'/api/user/login',
				{ email: emailOrNickname, password },
				{ observe: 'response' as 'body' })
			.pipe(map(val => val.headers.get(AUTH_TOKEN_HEADER)));
	}

	/**
	 * Logs out the currently authenticated user.
	 *
	 * @returns An observable containing the http response.
	 */
	public logout(): Observable<HttpResponse<object>> {
		return this.http.post<HttpResponse<object>>('/api/user/logout', {});
	}
}
