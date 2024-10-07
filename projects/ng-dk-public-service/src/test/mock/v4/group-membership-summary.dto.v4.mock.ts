import { GroupMembershipSummaryDTOV4 } from '@diamondkinetics/dk-public-dto-ts';
import { faker } from '@faker-js/faker';
import { define } from 'cooky-cutter';
import { mockGroupMembershipDTOV4 } from './group-membership.dto.v4.mock';

const membership = () => mockGroupMembershipDTOV4();

export const mockGroupMembershipSummaryDTOV4 = define<GroupMembershipSummaryDTOV4>({
  uuid: () => faker.string.uuid(),
  deleted: () => faker.datatype.boolean(),
  groupUuid: () => membership().group?.uuid ?? faker.string.uuid(),
  parentGroupUuid: () => membership().group?.parentGroup?.uuid ?? faker.string.uuid(),
  groupFullName: () => membership().group?.fullName ?? faker.company.name(),
  groupDescription: () => membership().group?.description ?? faker.company.buzzPhrase(),
  groupImageUrl: () => membership().group?.groupImageUrl ?? faker.image.url(),
  groupDeleted: () => membership().group?.deleted ?? faker.datatype.boolean(),
  userRole: () => membership().role?.fullName ?? faker.word.noun(),
  pendingInvitation: () => membership().isInvitation,
  pendingJoinRequest: () => membership().isRequest,
  invitor: () => (membership().isInvitation ? membership().invitor : undefined),
  confirmedMemberCount: () => faker.number.int(30),
});
