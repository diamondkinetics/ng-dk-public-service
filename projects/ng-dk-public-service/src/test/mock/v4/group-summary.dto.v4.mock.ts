import { GroupSummaryDTOV4 } from '@diamondkinetics/dk-public-dto-ts';
import { faker } from '@faker-js/faker';
import { define } from 'cooky-cutter';

export const mockGroupSummaryDTOV4 = define<GroupSummaryDTOV4>({
  uuid: () => faker.string.uuid(),
  fullName: () => faker.company.name(),
  description: () => faker.company.buzzPhrase(),
  groupImageUrl: () => faker.image.url(),
  confirmedMemberCount: () => faker.number.int(100),
  joinOpen: () => faker.datatype.boolean(),
  canViewMembers: () => faker.datatype.boolean(),
});
