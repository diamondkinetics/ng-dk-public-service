import { Provider } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { GroupDTOV4, mockGroupDTOV4 } from '@diamondkinetics/dk-public-dto-ts';

import { GroupServiceV4 } from '~lib/service/http/v4/group/group.service.v4';
import { ResourceServiceTestSuite } from '~test/service/http/resource.service.test-suite.spec';
import { ResourceMapping as route } from '~lib/enum/resource-mapping.enum';

class GroupServiceV4TestSuite extends ResourceServiceTestSuite<GroupDTOV4, GroupServiceV4> {

	constructor() {
		super('GroupServiceV4', route.GROUPS.getPath, 'GroupDTOV4', mockGroupDTOV4())
	}

	protected getInjectedService(): GroupServiceV4 {
		return TestBed.inject(GroupServiceV4);
	}

	protected getProviders(): Provider[] {
		return [
			this.getRequestInterceptorProvider(),
			GroupServiceV4
		];
	}

}

const testSuite: GroupServiceV4TestSuite = new GroupServiceV4TestSuite();
testSuite.run();
