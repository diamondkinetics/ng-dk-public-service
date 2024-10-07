import { TestBed } from '@angular/core/testing';
import {
	ExportEventSource,
	ExportEventType,
	ExportRequestDTOV3,
	GroupDTOV4
} from '@diamondkinetics/dk-public-dto-ts';

import { ExportRequestServiceV3 } from '~lib/service/http/v3/export-request/export-request.service.v3';
import { ResourceServiceTestSuite } from '~test/service/http/resource.service.test-suite.spec';
import { ResourceMapping as route } from '~lib/enum/resource-mapping.enum';
import { environment } from '~test/environments/environment';
import { mockExportRequestDTOV3 } from '~test/mock/v3/export-request.dto.v3.mock';
import { mockGroupDTOV4 } from '~test/mock/v4/group.dto.v4.mock';

class ExportRequestServiceV3TestSuite extends ResourceServiceTestSuite<ExportRequestDTOV3, ExportRequestServiceV3> {

	private exportEventSources: ExportEventSource[];
	private exportEventTypes: ExportEventType[];
	private mockGroup: GroupDTOV4;

	constructor() {
		super(route.EXPORT_REQUESTS.getPath(), 'ExportRequestDTOV3', mockExportRequestDTOV3());
		this.providers.push(ExportRequestServiceV3);
		this.exportEventSources = ExportEventSource.asArray();
		this.exportEventTypes = ExportEventType.asArray();
		this.mockGroup = mockGroupDTOV4();
	}

	protected getInjectedService(): ExportRequestServiceV3 {
		return TestBed.inject(ExportRequestServiceV3);
	}

	public run(): void {
		super.run();

		describe('getExportEventSources()', () => {
			it('Should GET the correct ExportEventSource objects', () => {
				this.service.getExportEventSources().subscribe((sources: ExportEventSource[]): void => {
					sources.forEach(s => {
						expect(this.exportEventSources.find(ees => ees.getName() === s.getName())).toBeDefined()
					});
				});

				const req = this.httpTestingController.expectOne(
					`${environment.apiUrl}/${this.service.getVersionString()}/exportEventSources`
				);

				this.expectGetRequest(req.request.method);
				req.flush(this.exportEventSources);
			});
		});

		describe('getExportEventTypes()', () => {
			it('Should GET the correct ExportEventType objects', () => {
				this.service.getExportEventTypes().subscribe((types: ExportEventType[]): void => {
					types.forEach(t => {
						expect(this.exportEventTypes.find(eet => eet.getName() === t.getName())).toBeDefined()
					});
				});

				const req = this.httpTestingController.expectOne(
					`${environment.apiUrl}/${this.service.getVersionString()}/exportEventTypes`
				);

				this.expectGetRequest(req.request.method);
				req.flush(this.exportEventTypes);
			});
		});

		describe('getAllForUserAndGroup()', () => {
			it('Should GET the correct ExportRequestDTOV3 list', () => {
				const list = [this.mockResource, this.mockResource, this.mockResource];

				this.service.getAllForUserAndGroup(this.mockGroup.uuid).subscribe((exportRequests: ExportRequestDTOV3[]): void => {
					expect(exportRequests).toEqual(list);
				});

				const req = this.httpTestingController.expectOne(
					`${environment.apiUrl}/${this.service.getVersionString()}/${route.GROUPS}/${this.mockGroup.uuid}/exportRequests`
				);

				this.expectGetRequest(req.request.method);
				req.flush(list);
			});
		});

		// This returns permissions objects defined in the Google Sheets API, we're only testing for properties being
		// present that we care about.
		describe('getPermissions()', () => {
			it('Should GET a permissions object related to an ExportRequestDTOV3 object', () => {
				const mockPermissions = [{ fileId: this.mockResource.spreadsheetId }];

				this.service.getPermissions(this.mockResource.uuid).subscribe((permissions: {}[]): void => {
					expect(permissions).toEqual(mockPermissions);
				});

				const req = this.httpTestingController.expectOne(
					`${environment.apiUrl}/${this.service.getVersionString()}/${route.EXPORT_REQUESTS}/${this.mockResource.uuid}/permissions`
				);

				this.expectGetRequest(req.request.method);
				req.flush(mockPermissions);
			});
		});
	}

}

describe('ExportRequestServiceV3TestSuite', () => {
	const testSuite: ExportRequestServiceV3TestSuite = new ExportRequestServiceV3TestSuite();
	testSuite.run();
});
