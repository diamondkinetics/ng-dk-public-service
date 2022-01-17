import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
	CouponDetailsResponseDTOV2,
	CouponRequestDTOV2,
	DKSubscription,
	SubscriptionType,
	UserProfileDTOV3
} from '@diamondkinetics/dk-public-dto-ts';

import { ResourceMapping as route } from '../../../../../enum/resource-mapping.enum';

@Injectable({ providedIn: 'root' })
export class BillingSubscriptionServiceV2 {

	constructor(protected http: HttpClient) {}

	public checkCoupon(couponId: string): Observable<CouponDetailsResponseDTOV2> {
		return this.http.get<CouponDetailsResponseDTOV2>(`/v2/${route.BILLING_COUPONS}/${couponId}`);
	}

	public applyCoupon(couponRequest: CouponRequestDTOV2, dkSubscription?: DKSubscription): Observable<void> {
		const params = {};

		if (dkSubscription) {
			params['dkSubscription'] = dkSubscription.getName();
		}

		return this.http.post<void>(`/v2/${route.BILLING_COUPONS}`, couponRequest, { params });
	}

	public startTrial(subscriptionType: SubscriptionType): Observable<UserProfileDTOV3> {
		const params = { type: subscriptionType.getName() };

		return this.http.post<UserProfileDTOV3>(`/v2/${route.BILLING_TRIAL}`, null, { params });
	}

	public updateSubscription(
		dkSubscription: DKSubscription,
		newDkSubscription?: DKSubscription,
		cardId?: string): Observable<void>
	{
		const params = { dkSubscription: dkSubscription.getName() };
		
		if (newDkSubscription) {
			params['newDkSubscription'] = newDkSubscription.getName();
		}

		if (cardId) {
			params['cardId'] = cardId;
		}

		return this.http.put<void>(`/v2/${route.BILLING}`, null, { params });
	}

	public cancelSubscription(dkSubscription: DKSubscription, when?: string): Observable<void> {
		const params = { dkSubscription: dkSubscription.getName() };

		if (when) {
			params['when'] = when;
		}

		return this.http.delete<void>(`/v2/${route.BILLING}`, { params });
	}

}
