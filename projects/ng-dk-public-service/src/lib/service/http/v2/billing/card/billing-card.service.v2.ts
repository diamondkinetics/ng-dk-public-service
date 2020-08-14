import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CardCreationDTOV2, CardResultDTOV2, DeletedCardDTOV2 } from '@diamondkinetics/dk-public-dto-ts';

import { ResourceMappings as route } from '../../../../../enum/resource-mappings.enum';

@Injectable({ providedIn: 'root' })
export class BillingCardServiceV2 {

	constructor(protected http: HttpClient) {}

	public create(cardDetails: CardCreationDTOV2, params?: {}): Observable<CardResultDTOV2> {
		return this.http.post<CardResultDTOV2>(`/v2/${route.BILLING_CARDS.getPath}`, cardDetails, { params });
	}

	public list(): Observable<CardResultDTOV2[]> {
		return this.http.get<CardResultDTOV2[]>(`/v2/${route.BILLING_CARDS.getPath}`);
	}

	public delete(cardId: string): Observable<DeletedCardDTOV2> {
		return this.http.delete<DeletedCardDTOV2>(`/v2/${route.BILLING_CARDS.getPath}/${cardId}`);
	}

}
