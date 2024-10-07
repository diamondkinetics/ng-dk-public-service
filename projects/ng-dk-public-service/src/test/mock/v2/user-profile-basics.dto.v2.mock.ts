import { AccountStatus, BattingOrientation, Position, UserProfileBasicsDTOV2 } from '@diamondkinetics/dk-public-dto-ts';
import { faker } from '@faker-js/faker';
import { define } from 'cooky-cutter';

export const mockUserProfileBasicsDTOV2 = define<UserProfileBasicsDTOV2>({
  uuid: () => faker.string.uuid(),
  firstName: () => faker.person.firstName(),
  lastName: () => faker.person.lastName(),
  teamName: () => faker.company.name(),
  primaryEmail: () => faker.internet.email(),
  nickname: () => faker.internet.userName(),
  profileImageUrl: () => faker.image.url(),
  height: () => faker.number.int(80).toString(),
  weight: () => faker.number.int(250).toString(),
  battingOrientation: () => faker.helpers.arrayElement(BattingOrientation.asArray().map(bo => bo.getName())),
  throwsHandedness: () => faker.helpers.arrayElement(BattingOrientation.asArray(true).map(bo => bo.getName())),
  position: () => Position.CENTER_FIELD.getName(),
  state: () => faker.location.state({ abbreviated: true }),
  graduationYear: () => faker.date.future().getFullYear().toString(),
  deleted: () => false,
  coach: () => false,
  hittingAccountStatus: () => faker.helpers.arrayElement(AccountStatus.asArray().map(s => s.getName())),
  hittingRenewalDate: () => faker.date.future().toString(),
  pitchingAccountStatus: () => faker.helpers.arrayElement(AccountStatus.asArray().map(s => s.getName())),
  pitchingRenewalDate: () => faker.date.future().toString(),
});
