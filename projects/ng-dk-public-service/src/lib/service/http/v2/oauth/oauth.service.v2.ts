import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientProfileDTOV2, ClientRegistrationDTOV2 } from '@diamondkinetics/dk-public-dto-ts';
import { Observable } from 'rxjs';

import { ResourceMapping as route } from '../../../../enum/resource-mapping.enum';

@Injectable()
export class OAuthServiceV2 {

	constructor(private http: HttpClient) {}

	public getClientProfile(clientId: string): Observable<ClientProfileDTOV2> {
		const params = { client_id: clientId };

		return this.http.get<ClientProfileDTOV2>(`/v2/${route.OAUTH_CLIENTS}`, { params });
	}

	public addNewClient(client: ClientRegistrationDTOV2, testContext?: boolean): Observable<ClientProfileDTOV2> {
		const params = {
			testContext: String(testContext)
		};

		return this.http.post<ClientProfileDTOV2>(`/v2/${route.OAUTH_CLIENTS}`, client, { params });
	}

}
