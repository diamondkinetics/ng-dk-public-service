import { AbstractSyncableDTOV2, LeaderboardDTOV2, AggregationOperation } from '@diamondkinetics/dk-public-dto-ts';
import { faker } from '@faker-js/faker';
import { extend } from 'cooky-cutter';
import { mockAbstractSyncableDTOV2 } from './abstract-syncable.dto.v2.mock';
import { mockUserProfileDTOV2 } from './user-profile.dto.v2.mock';

export const mockLeaderboardDTOV2 = extend<AbstractSyncableDTOV2, LeaderboardDTOV2>(mockAbstractSyncableDTOV2, {
  uuid: () => faker.string.uuid(),
  creator: () => mockUserProfileDTOV2(),
  groupUuid: () => faker.string.uuid(),
  fullName: () => faker.company.catchPhrase(),
  operation: () => faker.helpers.arrayElement(AggregationOperation.asArray().map(ao => ao.getFullName())),
  metric: () => undefined,
  maxResults: () => 10,
  lookbackTime: () => 604800000,
  startDate: () => undefined,
  endDate: () => undefined,
  public: () => false,
});
