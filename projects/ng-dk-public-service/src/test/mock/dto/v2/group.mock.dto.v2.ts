import * as faker from 'faker';
import { GroupDTOV2 } from '@diamondkinetics/dk-public-dto-ts';

import { mockUserProfileDTOV2 } from './user-profile.mock.dto.v2';
import { mockRoleDTOV2 } from './role.mock.dto.v2';

export const mockGroupDTOV2: GroupDTOV2 = {
	lastUpdate: faker.date.past(2019).toISOString(),
	creationDate: faker.date.past(2019).toISOString(),
	uuid: faker.random.uuid(),
	deleted: false,
	fullName: 'Jefferson Davis Middle School',
	creator: mockUserProfileDTOV2,
	groupImageUrl: faker.internet.url(),
	joinOpen: faker.random.boolean(),
	joinByInvite: faker.random.boolean(),
	joinByRequest: faker.random.boolean(),
	joinByPassword: faker.random.boolean(),
	searchable: faker.random.boolean(),
	memberViewRole: mockRoleDTOV2,
	descViewRole: mockRoleDTOV2,
	inviteRole: mockRoleDTOV2,
	requestorMembership: null,
	memberships: [], // TODO: mock membership
	invitations: [], // TODO: mock membership
	requests: [], // TODO: mock membership
	joinPassword: null
};
