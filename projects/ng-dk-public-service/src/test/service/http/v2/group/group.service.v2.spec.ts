import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as faker from 'faker';

import { GroupDTOV2 } from '@diamondkinetics/dk-public-dto-ts';

import { RequestInterceptor } from '@test/util/request-interceptor/request.interceptor';
import { environment } from '@test/environments/environment';
import { ResourceMappings as route } from '@lib/enum/resource-mappings.enum';
import { GroupServiceV2 } from '@lib/service/http/v2/group/group.service.v2';

describe('GroupServiceV2', () => {
	let httpTestingController: HttpTestingController;
	let service: GroupServiceV2;
	let mockGroupDTOV2: GroupDTOV2;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				GroupServiceV2,
				{
					provide: HTTP_INTERCEPTORS,
					useClass: RequestInterceptor,
					multi: true
				}
			],
			imports: [HttpClientTestingModule]
		});

		httpTestingController = TestBed.get(HttpTestingController);
		service = TestBed.get(GroupServiceV2);
		mockGroupDTOV2 = faker.
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
		it('Should POST the correct GroupDTOV2', () => {
			service.create(mockGroupDTOV2).subscribe((group: GroupDTOV2): void => {
				expect(group).toEqual(mockGroupDTOV2);
			});

			const req = httpTestingController.expectOne(
				`${environment.apiUrl}/${service.getVersionString()}/${route.GROUPS}`
			);
			expect(req.request.method).toEqual('POST');
			req.flush(mockGroupDTOV2);
		});
	});

	describe('read()', () => {
		it('Should GET the correct GroupDTOV2', () => {
			service.read(mockGroupDTOV2.uuid).subscribe((group: GroupDTOV2): void => {
				expect(group).toEqual(mockGroupDTOV2);
			});

			const req = httpTestingController.expectOne(
				`${environment.apiUrl}/${service.getVersionString()}/${route.GROUPS}/${mockGroupDTOV2.uuid}`
			);
			expect(req.request.method).toEqual('GET');
			req.flush(mockGroupDTOV2);
		});
	});

	describe('readForActingUser()', () => {
		it('Should GET the correct GroupDTOV2', () => {
			service.readForActingUser().subscribe((group: GroupDTOV2): void => {
				expect(group).toEqual(mockGroupDTOV2);
			});

			const req = httpTestingController.expectOne(
				`${environment.apiUrl}/${service.getVersionString()}/${route.GROUPS}`
			);
			expect(req.request.method).toEqual('GET');
			req.flush(mockGroupDTOV2);
		});
	});

	describe('update()', () => {
		it('Should PUT the correct GroupDTOV2', () => {
			const updated: GroupDTOV2 = {
				...mockGroupDTOV2,
				lastUpdate: '2020-01-28T09:39:11.412'
			};

			service.update(updated).subscribe((group: GroupDTOV2): void => {
				expect(group).toEqual(updated);
			});

			const req = httpTestingController.expectOne(
				`${environment.apiUrl}/${service.getVersionString()}/${route.GROUPS}/${updated.uuid}`
			);
			expect(req.request.method).toEqual('PUT');
			req.flush(updated);
		});
	});

	describe('delete()', () => {
		it('Should DELETE the correct GroupDTOV2', () => {
			const deleted: GroupDTOV2 = {
				...mockGroupDTOV2,
				deleted: true,
				lastUpdate: '2020-01-28T09:43:44.412'
			};

			service.delete(mockGroupDTOV2.uuid).subscribe((group: GroupDTOV2): void => {
				expect(group).toEqual(deleted);
			});

			const req = httpTestingController.expectOne(
				`${environment.apiUrl}/${service.getVersionString()}/${route.GROUPS}/${deleted.uuid}`
			);
			expect(req.request.method).toEqual('DELETE');
			req.flush(deleted);
		});
	});

	describe('list()', () => {
		it('Should GET the correct list of GroupDTOV2 objects', () => {
			const sessionList: GroupDTOV2[] = [
				mockGroupDTOV2,
				mockGroupDTOV2,
				mockGroupDTOV2
			];

			service.list().subscribe((groups: GroupDTOV2[]): void => {
				expect(groups).toEqual(sessionList);
				expect(groups.length).toEqual(sessionList.length);
			});

			const req = httpTestingController.expectOne(
				`${environment.apiUrl}/${service.getVersionString()}/${route.GROUPS}`
			);
			expect(req.request.method).toEqual('GET');
			req.flush(sessionList);
		});
	});

});
