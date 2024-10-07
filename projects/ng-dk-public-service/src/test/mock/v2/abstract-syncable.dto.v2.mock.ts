import { AbstractSyncableDTOV2, AbstractTimestampDTOV2 } from '@diamondkinetics/dk-public-dto-ts';
import { faker } from '@faker-js/faker';
import { extend } from 'cooky-cutter';
import { mockAbstractTimestampDTOV2 } from './abstract-timestamp.dto.v2.mock';

export const mockAbstractSyncableDTOV2 = extend<AbstractTimestampDTOV2, AbstractSyncableDTOV2>(
  mockAbstractTimestampDTOV2,
  {
    uuid: () => faker.string.uuid(),
    deleted: () => faker.datatype.boolean(),
  }
);
