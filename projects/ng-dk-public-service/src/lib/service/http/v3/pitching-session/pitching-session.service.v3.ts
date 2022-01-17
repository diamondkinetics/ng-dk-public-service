import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PitchingSessionDTOV3, PitchDTOV3 } from '@diamondkinetics/dk-public-dto-ts';

import { AbstractSensorSessionService } from './../../abstract-sensor-session.service';
import { ResourceMapping as route } from '../../../../enum/resource-mapping.enum';

@Injectable({ providedIn: 'root' })
export class PitchingSessionServiceV3 extends AbstractSensorSessionService<PitchDTOV3, PitchingSessionDTOV3> {

	constructor(protected http: HttpClient) {
		super(http, 3, route.PITCHING_SESSIONS.getPath());
	}

	/**
	 * Add a pitching session for the specified user.
	 *
	 * @param   session     The pitching session to add for the user.
	 * @param   forUserUuid The UUID of the user to add for the user.
	 *
	 * @returns             An observable of the PitchingSessionDTOV3 object from the response.
	 */
	public addNewSessionToSpecifiedUser(
		session: PitchingSessionDTOV3,
		forUserUuid: string
	): Observable<PitchingSessionDTOV3> {
		return this.http.post<PitchingSessionDTOV3>(
			`/${this.getVersionString()}/${route.USERS}/${forUserUuid}/${this.endpoint}`,
			session);
	}

	/**
	 * Retrieves the logged in user's pitching session information, which includes the session, pitches, and videos.
	 * No sensor data included.
	 *
	 * @param   lastUpdate Date to filter pitching sessions by the lastUpdate value, needs to be in the format
	 *                     yyyy-MM-dd'T'HH:mm:ss.SSS (e.g. 2020-01-27T15:46:04.412).
	 * @param   fetchSize  Number of results to fetch and include in the API response.
	 * @param   fetchPage  Page of results to fetch and include in the API response.
	 * @param   sortOrder  Order to sort the results, ASC or DESC.
	 * @param   sortKey    Field key to sort the results by.
	 *
	 * @returns            An observable array of PitchingSessionDTOV3 objects from the response.
	 */
	public getAllForUser(
		lastUpdate?: string,
		fetchSize?: number,
		fetchPage?: number,
		sortOrder?: string,
		sortKey?: string
	): Observable<PitchingSessionDTOV3[]> {
		let params = {};

		if (lastUpdate) {
			params = { ...params, lastUpdate };
		}

		if (fetchSize) {
			params = { ...params, fetchSize };
		}

		if (fetchPage) {
			params = { ...params, fetchPage };
		}

		if (sortOrder) {
			params = { ...params, sortOrder };
		}

		if (sortKey) {
			params = { ...params, sortKey };
		}

		return this.list(params);
	}

	/**
	 * Retrieves a specified user's pitching session information, which includes the sessions, pitches, and videos.
	 * No sensor data included.
	 *
	 * @param   forUserUuid The uuid of the user to retrieve pitching sessions for.
	 * @param   lastUpdate  Date to filter pitching sessions by the lastUpdate value, needs to be in the format
	 *                      yyyy-MM-dd'T'HH:mm:ss.SSS (e.g. 2020-01-27T15:46:04.412).
	 * @param   fetchSize   Number of results to fetch and include in the API response.
	 * @param   fetchPage   Page of results to fetch and include in the API response.
	 * @param   sortOrder   Order to sort the results, ASC or DESC.
	 * @param   sortKey     Field key to sort the results by.
	 *
	 * @returns             An observable array of PitchingSessionDTOV3 objects from the response.
	 */
	public getAllForSpecifiedUser(
		forUserUuid: string,
		lastUpdate?: string,
		fetchSize?: number,
		fetchPage?: number,
		sortOrder?: string,
		sortKey?: string
	): Observable<PitchingSessionDTOV3[]> {
		let params = {};

		if (lastUpdate) {
			params = { ...params, lastUpdate };
		}

		if (fetchSize) {
			params = { ...params, fetchSize };
		}

		if (fetchPage) {
			params = { ...params, fetchPage };
		}

		if (sortOrder) {
			params = { ...params, sortOrder };
		}

		if (sortKey) {
			params = { ...params, sortKey };
		}

		return this.http.get<PitchingSessionDTOV3[]>(
			`/${this.getVersionString()}/${route.USERS}/${forUserUuid}/${this.endpoint}`,
			params);
	}

	/**
	 * Retrieves a specified user's pitching session associated with a specified group, which includes the sessions,
	 * pitches, and videos. No sensor data included.
	 *
	 * @param   forUserUuid The uuid of the user to retrieve pitching sessions for.
	 * @param   groupUuid   The uuid of the group to retrieve pitching sessions for.
	 *
	 * @returns             An observable array of PitchingSessionDTOV3 objects.
	 */
	public getAllForSpecifiedUserAndGroup(forUserUuid: string, groupUuid: string): Observable<PitchingSessionDTOV3[]> {
		return this.http.get<PitchingSessionDTOV3[]>(
			`/${this.getVersionString()}/${route.USERS}/${forUserUuid}/group/${groupUuid}`);
	}

}
