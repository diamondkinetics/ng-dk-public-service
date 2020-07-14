import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BattingSessionDTOV3, SwingDTOV3 } from '@diamondkinetics/dk-public-dto-ts';

import { AbstractSensorSessionService } from '~lib/service/http/abstract-sensor-session.service';
import { ResourceMappings as route } from '~lib/enum/resource-mappings.enum';

@Injectable({ providedIn: 'root' })
export class BattingSessionServiceV3 extends AbstractSensorSessionService<SwingDTOV3, BattingSessionDTOV3> {

	constructor(protected http: HttpClient) {
		super(http, 3, route.BATTING_SESSIONS);
	}

	/**
	 * Retrieves batting sessions for the logged in user.
	 *
	 * @param   lastUpdate Date to filter batting sessions by the lastUpdate value, needs to be in the format
	 *                     yyyy-MM-dd'T'HH:mm:ss.SSS (e.g. 2020-01-27T15:46:04.412).
	 * @param   fetchSize  Number of results to fetch and include in the API response.
	 * @param   fetchPage  Page of results to fetch and include in the API response.
	 * @param   sortOrder  Order to sort the results, ASC or DESC.
	 * @param   sortKey    Field key to sort the results by.
	 *
	 * @returns            An observable array of BattingSessionDTOV3 objects from the response.
	 */
	public getAllForUser(
		lastUpdate?: string,
		fetchSize?: number,
		fetchPage?: number,
		sortOrder?: string,
		sortKey?: string
	): Observable<BattingSessionDTOV3[]> {
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
	 * Retrieves the logged in user's latest batting session information. The response will only include the logged in
	 * user's latest active batting session, which includes the session, swings, and video. No sensor data is included.
	 *
	 * @param lastUpdate Date to use for retrieving the latest session after a specific date, needs to be in the format
	 *                   yyyy-MM-dd'T'HH:mm:ss.SSS (e.g. 2020-01-27T15:46:04.412).
	 *
	 * @returns          An observable of the BattingSessionDTOV3 object from the response.
	 */
	public getLatestForUser(lastUpdate?: string): Observable<BattingSessionDTOV3> {
		let params = {};

		if (lastUpdate) {
			params = { ...params, lastUpdate };
		}

		return this.http.get<BattingSessionDTOV3>(`/${this.getVersionString()}/${this.endpoint}/latest`, { params });
	}

	/**
	 * Retrieves a specified user's (specified by uuid) batting session information. The response only contains the
	 * sessions, swings, and videos. No sensor data included.
	 *
	 * @param   forUserUuid The uuid of the user to retrieve batting sessions for.
	 * @param   lastUpdate  Date to filter batting sessions by the lastUpdate value, needs to be in the format
	 *                      yyyy-MM-dd'T'HH:mm:ss.SSS (e.g. 2020-01-27T15:46:04.412).
	 * @param   fetchSize   Number of results to fetch and include in the API response.
	 * @param   fetchPage   Page of results to fetch and include in the API response.
	 * @param   sortOrder   Order to sort the results, ASC or DESC.
	 * @param   sortKey     Field key to sort the results by.
	 *
	 * @returns             An observable array of BattingSessionDTOV3 objects from the response.
	 */
	public getAllForSpecifiedUser(
		forUserUuid: string,
		lastUpdate?: string,
		fetchSize?: number,
		fetchPage?: number,
		sortOrder?: string,
		sortKey?: string
	): Observable<BattingSessionDTOV3[]> {
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

		return this.http.get<BattingSessionDTOV3[]>(
			`/${this.getVersionString()}/${route.USERS}/${forUserUuid}/${this.endpoint}`,
			{ params });
	}

	/**
	 * Retrieves a user's (specified by uuid) batting sessions taken within a group (specified by uuid). The response
	 * only contains the batting sessions, swings, and videos. No sensor data included.
	 *
	 * @param   forUserUuid The uuid of the user to retrieve batting sessions for.
	 * @param   groupUuid   The uuid of the group to retrieve batting sessions for.
	 *
	 * @returns             An observable array of BattingSessionDTOV3 objects.
	 */
	public getAllForSpecifiedUserAndGroup(forUserUuid: string, groupUuid: string): Observable<BattingSessionDTOV3[]> {
		return this.http.get<BattingSessionDTOV3[]>(
			`/${this.getVersionString()}/${route.USERS}/${forUserUuid}/group/${groupUuid}/${this.endpoint}`);
	}

	/**
	 * Retrieves batting sessions taken by group members within a group (specified by uuid).
	 *
	 * @param   groupUuid  The uuid of the group to retrieve the latest batting sessions for.
	 * @param   lastUpdate Date to filter batting sessions by the lastUpdate value, needs to be in the format
	 *                     yyyy-MM-dd'T'HH:mm:ss.SSS (e.g. 2020-01-27T15:46:04.412).
	 * @param   fetchSize  Number of results to fetch and include in the API response.
	 * @param   fetchPage  Page of results to fetch and include in the API response.
	 * @param   sortOrder  Order to sort the results, ASC or DESC.
	 * @param   sortKey    Field key to sort the results by.
	 *
	 * @returns            An observable array of BattingSessionDTOV3 objects.
	 */
	public getGroupLatestBattingSessions(
		groupUuid: string,
		lastUpdate?: string,
		fetchSize?: number,
		fetchPage?: number,
		sortOrder?: string,
		sortKey?: string
	): Observable<BattingSessionDTOV3[]> {
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

		return this.http.get<BattingSessionDTOV3[]>(
			`/${this.getVersionString()}/${route.GROUPS}/${groupUuid}/latestBattingSessions`,
			{ params });
	}

}
