import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PitchingSessionDTOV3 } from '@diamondkinetics/dk-public-dto-ts';

import { mockPitchingSessionDTOV3 } from '@test/mock/dto/v3/pitching-session.mock.dto.v3';
import { RequestInterceptor } from '@test/util/request-interceptor/request.interceptor';
import { environment } from '@test/environments/environment';
import { ResourceMappings as route } from '@lib/enum/resource-mappings.enum';
import { PitchingSessionServiceV3 } from '@lib/service/http/v3/pitching-session/pitching-session.service.v3';

describe('PitchingSessionServiceV3', () => {
	let httpTestingController: HttpTestingController;
	let service: PitchingSessionServiceV3;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PitchingSessionServiceV3,
				{
					provide: HTTP_INTERCEPTORS,
					useClass: RequestInterceptor,
					multi: true
				}
			],
			imports: [HttpClientTestingModule]
		});

		httpTestingController = TestBed.get(HttpTestingController);
		service = TestBed.get(PitchingSessionServiceV3);
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it('Should be created', () => {
		expect(service).toBeTruthy();
	});

	/**
	 * Standard CRUD methods from AbstractResourceService
	 */
	describe('create()', () => {
		it('Should POST the correct PitchingSessionDTOV3', () => {
			service.create(mockPitchingSessionDTOV3).subscribe((session: PitchingSessionDTOV3): void => {
				expect(session).toEqual(mockPitchingSessionDTOV3);
			});

			const req = httpTestingController.expectOne(
				`${environment.apiUrl}/${service.getVersionString()}/${route.PITCHING_SESSIONS}`
			);
			expect(req.request.method).toEqual('POST');
			req.flush(mockPitchingSessionDTOV3);
		});
	});

	describe('read()', () => {
		it('Should GET the correct PitchingSessionDTOV3', () => {
			service.read(mockPitchingSessionDTOV3.uuid).subscribe((session: PitchingSessionDTOV3): void => {
				expect(session).toEqual(mockPitchingSessionDTOV3);
			});

			const req = httpTestingController.expectOne(
				`${environment.apiUrl}/${service.getVersionString()}/${route.PITCHING_SESSIONS}/${mockPitchingSessionDTOV3.uuid}`
			);
			expect(req.request.method).toEqual('GET');
			req.flush(mockPitchingSessionDTOV3);
		});
	});

	describe('readForActingUser()', () => {
		it('Should GET the correct PitchingSessionDTOV3', () => {
			service.readForActingUser().subscribe((session: PitchingSessionDTOV3): void => {
				expect(session).toEqual(mockPitchingSessionDTOV3);
			});

			const req = httpTestingController.expectOne(
				`${environment.apiUrl}/${service.getVersionString()}/${route.PITCHING_SESSIONS}`
			);
			expect(req.request.method).toEqual('GET');
			req.flush(mockPitchingSessionDTOV3);
		});
	});

	describe('update()', () => {
		it('Should PUT the correct PitchingSessionDTOV3', () => {
			const updated: PitchingSessionDTOV3 = {
				...mockPitchingSessionDTOV3,
				notes: 'This batting session has been updated.',
				lastUpdate: '2020-01-28T09:39:11.412'
			};

			service.update(updated).subscribe((session: PitchingSessionDTOV3): void => {
				expect(session).toEqual(updated);
			});

			const req = httpTestingController.expectOne(
				`${environment.apiUrl}/${service.getVersionString()}/${route.PITCHING_SESSIONS}/${updated.uuid}`
			);
			expect(req.request.method).toEqual('PUT');
			req.flush(updated);
		});
	});

	describe('delete()', () => {
		it('Should DELETE the correct PitchingSessionDTOV3', () => {
			const deleted: PitchingSessionDTOV3 = {
				...mockPitchingSessionDTOV3,
				deleted: true,
				lastUpdate: '2020-01-28T09:43:44.412'
			};

			service.delete(mockPitchingSessionDTOV3.uuid).subscribe((session: PitchingSessionDTOV3): void => {
				expect(session).toEqual(deleted);
			});

			const req = httpTestingController.expectOne(
				`${environment.apiUrl}/${service.getVersionString()}/${route.PITCHING_SESSIONS}/${deleted.uuid}`
			);
			expect(req.request.method).toEqual('DELETE');
			req.flush(deleted);
		});
	});

	describe('list()', () => {
		it('Should GET the correct list of PitchingSessionDTOV3 objects', () => {
			const sessionList: PitchingSessionDTOV3[] = [
				mockPitchingSessionDTOV3,
				mockPitchingSessionDTOV3,
				mockPitchingSessionDTOV3
			];

			service.list().subscribe((sessions: PitchingSessionDTOV3[]): void => {
				expect(sessions).toEqual(sessionList);
				expect(sessions.length).toEqual(sessionList.length);
			});

			const req = httpTestingController.expectOne(
				`${environment.apiUrl}/${service.getVersionString()}/${route.PITCHING_SESSIONS}`
			);
			expect(req.request.method).toEqual('GET');
			req.flush(sessionList);
		});
	});

	/**
	 * Methods implemented in AbstractSensorSessionService
	 */
	describe('createForSpecifiedUser()', () => {
		it('Should POST the correct PitchingSessionDTOV3', () => {
			const userUuid = '652c582b-f2b7-4030-943e-cff8329da5ff';
			const groupUuid = '24bf61ad-8e1e-42e5-a2dd-0716dbdca8cd';

			service.createForSpecifiedUser(mockPitchingSessionDTOV3, userUuid, groupUuid)
				.subscribe((session: PitchingSessionDTOV3): void => {
					expect(session).toEqual(mockPitchingSessionDTOV3);
				});

			const url = `${environment.apiUrl}/${service.getVersionString()}/${route.USERS}/${userUuid}/` +
				`${route.BATTING_SESSIONS}?groupUuid=${groupUuid}`;
			const req = httpTestingController.expectOne(url);
			expect(req.request.method).toEqual('POST');
			expect(req.request.params.get('groupUuid')).toEqual(groupUuid);
			req.flush(mockPitchingSessionDTOV3);
		});
	});

	/**
	 * Methods implemented in PitchingSessionServiceV3
	 */
	describe('addNewSessionToSpecifiedUser()', () => {
		it('Should POST the correct PitchingSessionDTOV3', () => {
			const userUuid = '652c582b-f2b7-4030-943e-cff8329da5ff';

			service.addNewSessionToSpecifiedUser(mockPitchingSessionDTOV3, userUuid)
				.subscribe((session: PitchingSessionDTOV3): void => {
					expect(session).toEqual(mockPitchingSessionDTOV3);
				});

			const req = httpTestingController.expectOne(
				`${environment.apiUrl}/${this.getVersionString()}/${route.USERS}/${userUuid}/${route.PITCHING_SESSIONS}`
			);
			expect(req.request.method).toEqual('POST');
			req.flush(mockPitchingSessionDTOV3);
		});
	});

	describe('getAllForUser()', () => {
		it('Should GET the correct list of PitchingSessionDTOV3 objects', () => {
			const sessionList: PitchingSessionDTOV3[] = [
				mockPitchingSessionDTOV3,
				mockPitchingSessionDTOV3,
				mockPitchingSessionDTOV3
			];
			const lastUpdate = '2019-10-31T05:00:00.000';
			const fetchSize = 10;
			const fetchPage = 1;
			const sortOrder = 'ASC';
			const sortKey = 'lastUpdate';

			service.getAllForUser(lastUpdate, fetchSize, fetchPage, sortOrder, sortKey)
				.subscribe((sessions: PitchingSessionDTOV3[]): void => {
					expect(sessions).toEqual(sessionList);
					expect(sessions.length).toEqual(sessionList.length);
				});

			const url = `${environment.apiUrl}/${service.getVersionString()}/${route.PITCHING_SESSIONS}` +
				`?lastUpdate=${lastUpdate}&fetchSize=${fetchSize}&fetchPage=${fetchPage}&sortOrder=${sortOrder}` +
				`&sortKey=${sortKey}`;
			const req = httpTestingController.expectOne(url);
			expect(req.request.method).toEqual('GET');
			expect(req.request.params.get('lastUpdate')).toEqual(lastUpdate);
			expect(req.request.params.get('fetchSize').toString()).toEqual(fetchSize.toString());
			expect(req.request.params.get('fetchPage').toString()).toEqual(fetchPage.toString());
			expect(req.request.params.get('sortOrder')).toEqual(sortOrder);
			expect(req.request.params.get('sortKey')).toEqual(sortKey);
			req.flush(sessionList);
		});
	});

	describe('getAllForSpecifiedUser()', () => {
		it('Should GET the correct list of PitchingSessionDTOV3 objects', () => {
			const userUuid = '652c582b-f2b7-4030-943e-cff8329da5ff';
			const sessionList: PitchingSessionDTOV3[] = [
				mockPitchingSessionDTOV3,
				mockPitchingSessionDTOV3,
				mockPitchingSessionDTOV3
			];
			const lastUpdate = '2019-10-31T05:00:00.000';
			const fetchSize = 10;
			const fetchPage = 1;
			const sortOrder = 'ASC';
			const sortKey = 'lastUpdate';

			service.getAllForSpecifiedUser(userUuid, lastUpdate, fetchSize, fetchPage, sortOrder, sortKey)
				.subscribe((sessions: PitchingSessionDTOV3[]): void => {
					expect(sessions).toEqual(sessionList);
					expect(sessions.length).toEqual(sessionList.length);
				});

			const url = `${environment.apiUrl}/${service.getVersionString()}/` +
				`${route.USERS}/${userUuid}/${route.PITCHING_SESSIONS}` +
				`?lastUpdate=${lastUpdate}&fetchSize=${fetchSize}&fetchPage=${fetchPage}` +
				`&sortOrder=${sortOrder}&sortKey=${sortKey}`;
			const req = httpTestingController.expectOne(url);
			expect(req.request.method).toEqual('GET');
			expect(req.request.params.get('lastUpdate')).toEqual(lastUpdate);
			expect(req.request.params.get('fetchSize').toString()).toEqual(fetchSize.toString());
			expect(req.request.params.get('fetchPage').toString()).toEqual(fetchPage.toString());
			expect(req.request.params.get('sortOrder')).toEqual(sortOrder);
			expect(req.request.params.get('sortKey')).toEqual(sortKey);
			req.flush(sessionList);
		});
	});

	describe('getAllForSpecifiedUserAndGroup()', () => {
		it('Should GET the correct list of PitchingSessionDTOV3 objects', () => {
			const userUuid = '652c582b-f2b7-4030-943e-cff8329da5ff';
			const groupUuid = '24bf61ad-8e1e-42e5-a2dd-0716dbdca8cd';
			const sessionList: PitchingSessionDTOV3[] = [
				mockPitchingSessionDTOV3,
				mockPitchingSessionDTOV3,
				mockPitchingSessionDTOV3
			];

			service.getAllForSpecifiedUserAndGroup(userUuid, groupUuid)
				.subscribe((sessions: PitchingSessionDTOV3[]): void => {
					expect(sessions).toEqual(sessionList);
					expect(sessions.length).toEqual(sessionList.length);
				});

			const url = `${environment.apiUrl}/${service.getVersionString()}/${route.USERS}/${userUuid}` +
				`/group/${groupUuid}/${route.PITCHING_SESSIONS}`;
			const req = httpTestingController.expectOne(url);
			expect(req.request.method).toEqual('GET');
			req.flush(sessionList);
		});
	});

});
