import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserProfileDTOV3, RegisterWithProfileRequestDTOV3 } from '@diamondkinetics/dk-public-dto-ts';
import { AbstractResourceService } from './../../abstract-resource.service';
import { ResourceMappings as route } from './../../../../enum/resource-mappings.enum';

@Injectable({ providedIn: 'root' })
export class UserProfileServiceV3 extends AbstractResourceService<UserProfileDTOV3> {

	constructor(protected http: HttpClient) {
		super(http, 3, route.USERS.getPath);
	}

	/**
	 * Registers a user in the API with the provided info.
	 *
	 * @param   registrationRequest The data to use for the registration.
	 * @returns                     An observable containing a UserProfileDTOV3 object with data from the API.
	 */
	public register(registrationRequest: RegisterWithProfileRequestDTOV3): Observable<UserProfileDTOV3> {
		return this.http.post<UserProfileDTOV3>(
			`/${this.getVersionString()}/${route.USERS}`, registrationRequest);
	}

	/**
	 * Retrieves the profile for the currently logged in user.
	 *
	 * @returns An observable containing a UserProfileDTOV3 object with data from the API.
	 */
	public getLoggedInUserProfile(): Observable<UserProfileDTOV3> {
		return this.http.get<UserProfileDTOV3>(`/${this.getVersionString()}/${route.USER_PROFILE}`);
	}

	/**
	 * Retrieves the profile for a specific user by uuid.
	 *
	 * @param   forUserUuid The uuid of the user who we're retrieving the profile from.
	 * @returns             An observable containing a UserProfileDTOV3 object with data from the API.
	 */
	public getOtherUserProfile(forUserUuid: string): Observable<UserProfileDTOV3> {
		return this.http.get<UserProfileDTOV3>(`/${this.getVersionString()}/${route.USER_PROFILE}/${forUserUuid}`);
	}

	/**
	 * Sets user profile information for the logged in user.
	 * 
	 * @param   userProfile The user profile data to set.
	 * @returns             An observable containing a UserProfileDTOV3 object with the updated profile data.
	 */
	public setUserProfile(userProfile: UserProfileDTOV3): Observable<UserProfileDTOV3> {
		return this.http.post<UserProfileDTOV3>(`/${this.getVersionString()}/${route.USER_PROFILE}`, userProfile);
	}

}
