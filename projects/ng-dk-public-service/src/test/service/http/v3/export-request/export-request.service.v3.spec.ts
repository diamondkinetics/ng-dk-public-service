import { TestBed } from '@angular/core/testing';
import { ExportRequestDTOV3, mockExportRequestDTOV3 } from '@diamondkinetics/dk-public-dto-ts';

import { ExportRequestServiceV3 } from '~lib/service/http/v3/export-request/export-request.service.v3';
import { ResourceServiceTestSuite } from '~test/service/http/resource.service.test-suite.spec';
import { ResourceMapping as route } from '~lib/enum/resource-mapping.enum';

class ExportRequestServiceV3TestSuite extends ResourceServiceTestSuite<ExportRequestDTOV3, ExportRequestServiceV3> {

	public static readonly suiteName: string = 'ExportRequestServiceV3TestSuite';

	constructor() {
		super(route.EXPORT_REQUESTS.getPath(), 'ExportRequestDTOV3', mockExportRequestDTOV3());
		this.providers.push(ExportRequestServiceV3);
	}

	protected getInjectedService(): ExportRequestServiceV3 {
		return TestBed.inject(ExportRequestServiceV3);
	}

	public run(): void {
		super.run();

		// TODO: Add tests for export request service specific methods.
	}

}

describe('ExportRequestServiceV3TestSuite', () => {
	const testSuite: ExportRequestServiceV3TestSuite = new ExportRequestServiceV3TestSuite();
	testSuite.run();
});
