import { TestBed } from '@angular/core/testing';
import { UserProfileDTOV3 } from '@diamondkinetics/dk-public-dto-ts';

import { mockUserProfileDTOV3 } from '~test/mock/v3/user-profile.dto.v3.mock';
import { UserProfileServiceV3 } from '~lib/service/http/v3/user-profile/user-profile.service.v3';
import { ResourceServiceTestSuite } from '~test/service/http/resource.service.test-suite.spec';
import { ResourceMapping as route } from '~lib/enum/resource-mapping.enum';

class UserProfileServiceV3TestSuite extends ResourceServiceTestSuite<UserProfileDTOV3, UserProfileServiceV3> {

	constructor() {
		super(route.USER_PROFILE.getPath(), 'UserProfileDTOV3', mockUserProfileDTOV3());
		this.providers.push(UserProfileServiceV3);
	}

	protected getInjectedService(): UserProfileServiceV3 {
		return TestBed.inject(UserProfileServiceV3);
	}

}

describe('UserProfileServiceV3TestSuite', () => {
	const testSuite: UserProfileServiceV3TestSuite = new UserProfileServiceV3TestSuite();
	testSuite.run();
});
