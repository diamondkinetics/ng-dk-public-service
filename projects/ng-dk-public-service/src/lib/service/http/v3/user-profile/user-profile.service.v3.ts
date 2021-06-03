import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
	UserProfileDTOV3,
	RegisterWithProfileRequestDTOV3,
	ResetPasswordRequestDTO,
	LoggedInUserDTO
} from '@diamondkinetics/dk-public-dto-ts';
import { Observable } from 'rxjs';

import { AbstractResourceService } from './../../abstract-resource.service';
import { ResourceMapping as route } from '../../../../enum/resource-mapping.enum';

@Injectable({ providedIn: 'root' })
export class UserProfileServiceV3 extends AbstractResourceService<UserProfileDTOV3> {

	constructor(protected http: HttpClient) {
		super(http, 3, route.USER_PROFILE.getPath);
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

	/**
	 * Updates the profile image of the currently logged in user.
	 * 
	 * @param   file     The image file to be uploaded.
	 * @param   fileName The name of the file.
	 * @returns          An observable containing a UserProfileDTOV3 object with the updated URL to the profile image.
	 */
	public updateProfileImage(file: Blob, fileName: string): Observable<UserProfileDTOV3> {
		const formData = new FormData();
		formData.append('file', file, fileName);

		return this.http.post<UserProfileDTOV3>(`/${this.getVersionString()}/${route.USER_PROFILE_IMAGE}`, formData);
	}

	/**
	 * Resets the password of a user.
	 * 
	 * @param   request The reset password request data.
	 * @returns         An observable containing a LoggedInUserDTO.
	 */
	public resetPassword(request: ResetPasswordRequestDTO): Observable<LoggedInUserDTO> {
		return this.http.post<LoggedInUserDTO>(`/${this.getVersionString()}/api/user/resetPassword`, request);
	}

}
