import { AbstractSyncableDTOV2, CompetitionLevelDTOV2 } from '@diamondkinetics/dk-public-dto-ts';
import { faker } from '@faker-js/faker';
import { extend } from 'cooky-cutter';
import { mockAbstractSyncableDTOV2 } from './abstract-syncable.dto.v2.mock';

export const mockCompetitionLevelDTOV2 = extend<AbstractSyncableDTOV2, CompetitionLevelDTOV2>(
  mockAbstractSyncableDTOV2,
  {
    name: () => faker.word.noun(),
    sortOrder: () => faker.number.int(20),
    underThirteen: () => faker.datatype.boolean(),
  }
);
