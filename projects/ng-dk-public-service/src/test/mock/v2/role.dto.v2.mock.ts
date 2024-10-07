import { RoleDTOV2 } from '@diamondkinetics/dk-public-dto-ts';
import { faker } from '@faker-js/faker';
import { define } from 'cooky-cutter';

export const mockRoleDTOV2 = define<RoleDTOV2>({
  shortName: () => faker.company.buzzNoun(),
  fullName: () => faker.company.buzzAdjective(),
  desc: () => faker.company.buzzPhrase(),
  hierarchy: () => faker.number.int(1000),
  isAdmin: () => faker.datatype.boolean(),
  isMember: () => true,
});
