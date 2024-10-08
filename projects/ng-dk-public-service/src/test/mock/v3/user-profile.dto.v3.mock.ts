import {
  AbstractSyncableDTOV3,
  BattingOrientation,
  DKSubscription,
  PlayType,
  Position,
  UserProfileDTOV3,
} from '@diamondkinetics/dk-public-dto-ts';
import { faker } from '@faker-js/faker';
import { extend } from 'cooky-cutter';
import { mockUserAppVersionOverrideDTOV2 } from './../v2/user-app-version-override.dto.v2.mock';
import { mockAbstractSyncableDTOV3 } from './abstract-syncable.dto.v3.mock';

export const mockUserProfileDTOV3 = extend<AbstractSyncableDTOV3, UserProfileDTOV3>(mockAbstractSyncableDTOV3, {
  primaryEmail: () => faker.internet.email(),
  nickname: () => faker.internet.userName(),
  firstName: () => faker.person.firstName(),
  lastName: () => faker.person.lastName(),
  secondaryEmail: () => faker.internet.email(),
  preferences: () => '',
  bouncing: () => faker.datatype.boolean(),
  secondaryBouncing: () => faker.datatype.boolean(),
  claimSwingPlaneMetrics: () => faker.datatype.boolean(),
  birthDate: () => faker.date.recent({ days: 18 }).toISOString(),
  height: () => faker.number.int(80).toString(),
  weight: () => faker.number.int(250).toString(),
  playType: () => faker.helpers.arrayElement(PlayType.asArray(true).map(pt => pt.getName())),
  battingOrientation: () => faker.helpers.arrayElement(BattingOrientation.asArray().map(bo => bo.getName())),
  throwsHandedness: () => faker.helpers.arrayElement(BattingOrientation.asArray(true).map(bo => bo.getName())),
  competitionLevelUuid: () => faker.string.uuid(),
  coach: () => faker.datatype.boolean(),
  hideFromSearch: () => faker.datatype.boolean(),
  zipCode: () => faker.location.zipCode(),
  profileImageUrl: () => faker.image.url(),
  userMetaData: () => '',
  youthRegistration: () => faker.datatype.boolean(),
  trialing: () => faker.datatype.boolean(),
  activeMembership: () => faker.datatype.boolean(),
  accountStatus: () => faker.word.adjective(),
  renewalDate: () => faker.date.soon({ days: 1 }).toISOString(),
  appleRenewalDate: () => faker.date.soon({ days: 1 }).toISOString(),
  subscribed: () => faker.datatype.boolean(),
  subscribedTo: () =>
    faker.helpers.arrayElement([
      DKSubscription.ANNUAL_PREMIUM_HITTER.getName(),
      DKSubscription.MONTHLY_PREMIUM_HITTER.getName(),
    ]),
  hadApplePaymentApplied: () => faker.datatype.boolean(),
  referringOrganizationUuid: () => faker.string.uuid(),
  pitchingAccountStatus: () => faker.word.adjective(),
  pitchingRenewalDate: () => faker.date.soon({ days: 1 }).toISOString(),
  pitchingAppleRenewalDate: () => faker.date.soon({ days: 1 }).toISOString(),
  pitchingHadApplePaymentApplied: () => faker.datatype.boolean(),
  pitchingTrialing: () => faker.datatype.boolean(),
  pitchingActiveMembership: () => faker.datatype.boolean(),
  pitchingSubscribed: () => faker.datatype.boolean(),
  pitchingSubscribedTo: () =>
    faker.helpers.arrayElement([
      DKSubscription.ANNUAL_PREMIUM_PITCHER.getName(),
      DKSubscription.MONTHLY_PREMIUM_PITCHER.getName(),
    ]),
  axonBaseballId: () => faker.string.uuid(),
  axonSoftballId: () => faker.string.uuid(),
  paidViaLicense: () => faker.datatype.boolean(),
  licenseOwner: () => faker.datatype.boolean(),
  paidLicensesForCurrentBillingCycle: () => faker.number.int(),
  appVersionOverrides: () => Array.from({ length: 3 }, () => mockUserAppVersionOverrideDTOV2()),
  state: () => faker.location.state({ abbreviated: true }),
  graduationYear: () => faker.date.future().getFullYear().toString(),
  position: () => faker.helpers.arrayElement<string>(Position.asArray().map(p => p.getName())),
});
