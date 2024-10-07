import { AbstractSyncableDTOV3, AbstractTimestampDTOV3 } from '@diamondkinetics/dk-public-dto-ts';
import { faker } from '@faker-js/faker';
import { extend } from 'cooky-cutter';
import { mockAbstractTimestampDTOV3 } from './abstract-timestamp.dto.v3.mock';

export const mockAbstractSyncableDTOV3 = extend<AbstractTimestampDTOV3, AbstractSyncableDTOV3>(
  mockAbstractTimestampDTOV3,
  {
    uuid: () => faker.string.uuid(),
    deleted: () => faker.datatype.boolean(),
  }
);
