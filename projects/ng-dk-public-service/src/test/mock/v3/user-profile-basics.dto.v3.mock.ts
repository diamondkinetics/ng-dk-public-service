import { AccountStatus, UserProfileBasicsDTOV3 } from '@diamondkinetics/dk-public-dto-ts';
import { faker } from '@faker-js/faker';
import * as cookyCutter from 'cooky-cutter';

export const mockUserProfileBasicsDTOV3 = cookyCutter.define<UserProfileBasicsDTOV3>({
  uuid: () => faker.string.uuid(),
  firstName: () => faker.person.firstName(),
  lastName: () => faker.person.lastName(),
  profileImageUrl: () => faker.image.url(),
  accountStatus: () => faker.helpers.arrayElement(AccountStatus.asArray().map(s => s.getName())),
  paid: () => true,
  paidViaLicense: () => false,
  state: () => undefined,
  graduationYear: () => undefined,
  position: () => undefined,
});
