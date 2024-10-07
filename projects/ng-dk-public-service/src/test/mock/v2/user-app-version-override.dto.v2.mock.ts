import { UserAppVersionOverrideDTOV2 } from '@diamondkinetics/dk-public-dto-ts';
import { faker } from '@faker-js/faker';
import { define } from 'cooky-cutter';

export const mockUserAppVersionOverrideDTOV2 = define<UserAppVersionOverrideDTOV2>({
  deleted: () => faker.datatype.boolean(),
  effectiveStarting: () => faker.date.recent({ days: 30 }).toISOString(),
  effectiveUntil: () => faker.date.soon({ days: 30 }).toISOString(),
  versionKey: () => faker.database.column(),
  value: () => faker.system.semver(),
});
