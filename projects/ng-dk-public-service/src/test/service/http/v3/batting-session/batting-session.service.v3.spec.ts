import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BattingSessionDTOV3 } from '@diamondkinetics/dk-public-dto-ts';

import { mockBattingSessionDTOV3 } from '@test/mock/dto/v3/batting-session.mock.dto.v3';
import { RequestInterceptor } from '@test/util/request-interceptor/request.interceptor';
import { environment } from '@test/environments/environment';
import { ResourceMappings as route } from '@lib/enum/resource-mappings.enum';
import { BattingSessionServiceV3 } from '@lib/service/http/v3/batting-session/batting-session.service.v3';


describe('BattingSessionServiceV3', () => {

	let httpTestingController: HttpTestingController;
	let service: BattingSessionServiceV3;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				BattingSessionServiceV3,
				{
					provide: HTTP_INTERCEPTORS,
					useClass: RequestInterceptor,
					multi: true
				}
			],
			imports: [HttpClientTestingModule]
		});

		httpTestingController = TestBed.get(HttpTestingController);
		service = TestBed.get(BattingSessionServiceV3);
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it('Should be created', () => {
		expect(service).toBeTruthy();
	});

	/**
	 * Methods implemented in AbstractResourceService
	 */
	describe('create()', () => {
		it('Should POST the correct BattingSessionDTOV3', () => {
			service.create(mockBattingSessionDTOV3).subscribe((session: BattingSessionDTOV3): void => {
				expect(session).toEqual(mockBattingSessionDTOV3);
			});

			const req = httpTestingController.expectOne(
				`${environment.apiUrl}/${service.getVersionString()}/${route.BATTING_SESSIONS}`
			);
			expect(req.request.method).toEqual('POST');
			req.flush(mockBattingSessionDTOV3);
		});
	});

	describe('read()', () => {
		it('Should GET the correct BattingSessionDTOV3', () => {
			service.read(mockBattingSessionDTOV3.uuid).subscribe((session: BattingSessionDTOV3): void => {
				expect(session).toEqual(mockBattingSessionDTOV3);
			});

			const req = httpTestingController.expectOne(
				`${environment.apiUrl}/${service.getVersionString()}/${route.BATTING_SESSIONS}/${mockBattingSessionDTOV3.uuid}`
			);
			expect(req.request.method).toEqual('GET');
			req.flush(mockBattingSessionDTOV3);
		});
	});

	describe('readForActingUser()', () => {
		it('Should GET the correct BattingSessionDTOV3', () => {
			service.readForActingUser().subscribe((session: BattingSessionDTOV3): void => {
				expect(session).toEqual(mockBattingSessionDTOV3);
			});

			const req = httpTestingController.expectOne(
				`${environment.apiUrl}/${service.getVersionString()}/${route.BATTING_SESSIONS}`
			);
			expect(req.request.method).toEqual('GET');
			req.flush(mockBattingSessionDTOV3);
		});
	});

	describe('update()', () => {
		it('Should PUT the correct BattingSessionDTOV3', () => {
			const updated: BattingSessionDTOV3 = {
				...mockBattingSessionDTOV3,
				notes: 'This batting session has been updated.',
				lastUpdate: '2020-01-28T09:39:11.412'
			};

			service.update(updated).subscribe((session: BattingSessionDTOV3): void => {
				expect(session).toEqual(updated);
			});

			const req = httpTestingController.expectOne(
				`${environment.apiUrl}/${service.getVersionString()}/${route.BATTING_SESSIONS}/${updated.uuid}`
			);
			expect(req.request.method).toEqual('PUT');
			req.flush(updated);
		});
	});

	describe('delete()', () => {
		it('Should DELETE the correct BattingSessionDTOV3', () => {
			const deleted: BattingSessionDTOV3 = {
				...mockBattingSessionDTOV3,
				deleted: true,
				lastUpdate: '2020-01-28T09:43:44.412'
			};

			service.delete(mockBattingSessionDTOV3.uuid).subscribe((session: BattingSessionDTOV3): void => {
				expect(session).toEqual(deleted);
			});

			const req = httpTestingController.expectOne(
				`${environment.apiUrl}/${service.getVersionString()}/${route.BATTING_SESSIONS}/${deleted.uuid}`
			);
			expect(req.request.method).toEqual('DELETE');
			req.flush(deleted);
		});
	});

	describe('list()', () => {
		it('Should GET the correct list of BattingSessionDTOV3 objects', () => {
			const sessionList: BattingSessionDTOV3[] = [
				mockBattingSessionDTOV3,
				mockBattingSessionDTOV3,
				mockBattingSessionDTOV3
			];

			service.list().subscribe((sessions: BattingSessionDTOV3[]): void => {
				expect(sessions).toEqual(sessionList);
				expect(sessions.length).toEqual(sessionList.length);
			});

			const req = httpTestingController.expectOne(
				`${environment.apiUrl}/${service.getVersionString()}/${route.BATTING_SESSIONS}`
			);
			expect(req.request.method).toEqual('GET');
			req.flush(sessionList);
		});
	});

	/**
	 * Methods implemented in AbstractSensorSessionService
	 */
	describe('createForSpecifiedUser()', () => {
		it('Should POST the correct BattingSessionDTOV3', () => {
			const userUuid = '652c582b-f2b7-4030-943e-cff8329da5ff';
			const groupUuid = '24bf61ad-8e1e-42e5-a2dd-0716dbdca8cd';

			service.createForSpecifiedUser(mockBattingSessionDTOV3, userUuid, groupUuid)
				.subscribe((session: BattingSessionDTOV3): void => {
					expect(session).toEqual(mockBattingSessionDTOV3);
				});

			const url = `${environment.apiUrl}/${service.getVersionString()}/${route.USERS}/${userUuid}/` +
				`${route.BATTING_SESSIONS}?groupUuid=${groupUuid}`;
			const req = httpTestingController.expectOne(url);
			expect(req.request.method).toEqual('POST');
			expect(req.request.params.get('groupUuid')).toEqual(groupUuid);
			req.flush(mockBattingSessionDTOV3);
		});
	});

	/**
	 * Methods implemented in BattingSessionServiceV3
	 */
	describe('getAllForUser()', () => {
		it('Should GET the correct list of BattingSessionDTOV3 objects', () => {
			const sessionList: BattingSessionDTOV3[] = [
				mockBattingSessionDTOV3,
				mockBattingSessionDTOV3,
				mockBattingSessionDTOV3
			];
			const lastUpdate = '2019-10-31T05:00:00.000';
			const fetchSize = 10;
			const fetchPage = 1;
			const sortOrder = 'ASC';
			const sortKey = 'lastUpdate';

			service.getAllForUser(lastUpdate, fetchSize, fetchPage, sortOrder, sortKey)
				.subscribe((sessions: BattingSessionDTOV3[]): void => {
					expect(sessions).toEqual(sessionList);
					expect(sessions.length).toEqual(sessionList.length);
				});

			const url = `${environment.apiUrl}/${service.getVersionString()}/${route.BATTING_SESSIONS}` +
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

	describe('getLatestForUser()', () => {
		it('Should GET the correct BattingSessionDTOV3', () => {
			const lastUpdate = '2019-10-31T05:00:00.000';

			service.getLatestForUser(lastUpdate).subscribe((session: BattingSessionDTOV3): void => {
				expect(session).toEqual(mockBattingSessionDTOV3);
			});

			const url = `${environment.apiUrl}/${service.getVersionString()}/${route.BATTING_SESSIONS}/latest` +
				`?lastUpdate=${lastUpdate}`;
			const req = httpTestingController.expectOne(url);
			expect(req.request.method).toEqual('GET');
			expect(req.request.params.get('lastUpdate')).toEqual(lastUpdate);
			req.flush(mockBattingSessionDTOV3);
		});
	});

	describe('getAllForSpecifiedUser()', () => {
		it('Should GET the correct list of BattingSessionDTOV3 objects', () => {
			const userUuid = '652c582b-f2b7-4030-943e-cff8329da5ff';
			const sessionList: BattingSessionDTOV3[] = [
				mockBattingSessionDTOV3,
				mockBattingSessionDTOV3,
				mockBattingSessionDTOV3
			];
			const lastUpdate = '2019-10-31T05:00:00.000';
			const fetchSize = 10;
			const fetchPage = 1;
			const sortOrder = 'ASC';
			const sortKey = 'lastUpdate';

			service.getAllForSpecifiedUser(userUuid, lastUpdate, fetchSize, fetchPage, sortOrder, sortKey)
				.subscribe((sessions: BattingSessionDTOV3[]): void => {
					expect(sessions).toEqual(sessionList);
					expect(sessions.length).toEqual(sessionList.length);
				});

			const url = `${environment.apiUrl}/${service.getVersionString()}/` +
				`${route.USERS}/${userUuid}/${route.BATTING_SESSIONS}` +
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
		it('Should GET the correct list of BattingSessionDTOV3 objects', () => {
			const userUuid = '652c582b-f2b7-4030-943e-cff8329da5ff';
			const groupUuid = '24bf61ad-8e1e-42e5-a2dd-0716dbdca8cd';
			const sessionList: BattingSessionDTOV3[] = [
				mockBattingSessionDTOV3,
				mockBattingSessionDTOV3,
				mockBattingSessionDTOV3
			];

			service.getAllForSpecifiedUserAndGroup(userUuid, groupUuid)
				.subscribe((sessions: BattingSessionDTOV3[]): void => {
					expect(sessions).toEqual(sessionList);
					expect(sessions.length).toEqual(sessionList.length);
				});

			const url = `${environment.apiUrl}/${service.getVersionString()}/${route.USERS}/${userUuid}` +
				`/group/${groupUuid}/${route.BATTING_SESSIONS}`;
			const req = httpTestingController.expectOne(url);
			expect(req.request.method).toEqual('GET');
			req.flush(sessionList);
		});
	});

	describe('getGroupLatestBattingSessions', () => {
		it('Should GET the correct list of BattingSessionDTOV3 objects', () => {
			const groupUuid = '24bf61ad-8e1e-42e5-a2dd-0716dbdca8cd';
			const sessionList: BattingSessionDTOV3[] = [
				mockBattingSessionDTOV3,
				mockBattingSessionDTOV3,
				mockBattingSessionDTOV3
			];
			const lastUpdate = '2019-10-31T05:00:00.000';
			const fetchSize = 10;
			const fetchPage = 1;
			const sortOrder = 'ASC';
			const sortKey = 'lastUpdate';

			service.getGroupLatestBattingSessions(groupUuid, lastUpdate, fetchSize, fetchPage, sortOrder, sortKey)
				.subscribe((sessions: BattingSessionDTOV3[]): void => {
					expect(sessions).toEqual(sessionList);
					expect(sessions.length).toEqual(sessionList.length);
				});

			const url = `${environment.apiUrl}/${service.getVersionString()}/${route.GROUPS}/${groupUuid}/` +
				`latestBattingSessions?lastUpdate=${lastUpdate}&fetchSize=${fetchSize}&fetchPage=${fetchPage}` +
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

});
