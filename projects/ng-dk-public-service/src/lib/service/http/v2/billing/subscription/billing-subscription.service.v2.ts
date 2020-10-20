import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CouponDetailsResponseDTOV2, CouponRequestDTOV2, DKSubscription } from '@diamondkinetics/dk-public-dto-ts';

import { ResourceMappings as route } from '../../../../../enum/resource-mappings.enum';

@Injectable({ providedIn: 'root' })
export class BillingSubscriptionServiceV2 {

	constructor(protected http: HttpClient) {}

	public checkCoupon(couponId: string): Observable<CouponDetailsResponseDTOV2> {
		return this.http.get<CouponDetailsResponseDTOV2>(`/v2/${route.BILLING_COUPONS}/${couponId}`);
	}

	public applyCoupon(couponRequest: CouponRequestDTOV2, dkSubscription?: DKSubscription): Observable<void> {
		const params = {};

		if (dkSubscription) {
			params['dkSubscription'] = dkSubscription.getName;
		}

		return this.http.post<void>(`/v2/${route.BILLING_COUPONS}`, couponRequest, params);
	}

}
