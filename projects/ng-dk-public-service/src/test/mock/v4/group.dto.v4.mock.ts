import { AbstractSyncableDTOV4, GroupDTOV4, GroupMembershipDTOV4 } from '@diamondkinetics/dk-public-dto-ts';
import { faker } from '@faker-js/faker';
import { array, extend, Factory } from 'cooky-cutter';
import { mockAbstractSyncableDTOV4 } from './abstract-syncable.dto.v4.mock';
import { mockRoleDTOV2 } from './../v2/role.dto.v2.mock';
import { mockUserProfileBasicsDTOV2 } from './../v2/user-profile-basics.dto.v2.mock';
import { mockGroupMembershipDTOV4 } from './group-membership.dto.v4.mock';

const members = array<GroupMembershipDTOV4>(mockGroupMembershipDTOV4, faker.number.int(20));
const invitations = array<GroupMembershipDTOV4>(mockGroupMembershipDTOV4, faker.number.int(10));
const requests = array<GroupMembershipDTOV4>(mockGroupMembershipDTOV4, faker.number.int(10));

export const mockGroupDTOV4: Factory<GroupDTOV4> = extend<AbstractSyncableDTOV4, GroupDTOV4>(
  mockAbstractSyncableDTOV4,
  {
    creator: () => mockUserProfileBasicsDTOV2(),
    parentGroup: () => undefined,
    childGroups: () => undefined,
    memberViewRole: () => mockRoleDTOV2(),
    descViewRole: () => mockRoleDTOV2(),
    inviteRole: () => mockRoleDTOV2(),
    sessionViewRole: () => mockRoleDTOV2(),
    requestorMembership: () => mockGroupMembershipDTOV4(),
    confirmedMemberships: () => members({ isInvitation: false, isRequest: false }),
    invitations: () => invitations({ isInvitation: true, isRequest: false, invitor: mockUserProfileBasicsDTOV2() }),
    requests: () => requests({ isInvitation: false, isRequest: true, invitor: undefined }),
    confirmedMemberCount: () => members().length,
    fullName: () => faker.company.name(),
    description: () => faker.company.buzzPhrase(),
    groupImageUrl: () => faker.image.url(),
    joinPassword: () => undefined,
    joinOpen: () => faker.datatype.boolean(),
    joinByInvite: () => faker.datatype.boolean(),
    joinByRequest: () => faker.datatype.boolean(),
    joinByPassword: () => false,
    searchable: () => faker.datatype.boolean(),
  }
);
