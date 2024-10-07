import { AbstractTimestampDTOV4, AbstractSyncableDTOV4 } from '@diamondkinetics/dk-public-dto-ts';
import { faker } from '@faker-js/faker';
import { extend } from 'cooky-cutter';
import { mockAbstractTimestampDTOV4 } from './abstract-timestamp.dto.v4.mock';

export const mockAbstractSyncableDTOV4 = extend<AbstractTimestampDTOV4, AbstractSyncableDTOV4>(
  mockAbstractTimestampDTOV4,
  {
    uuid: () => faker.string.uuid(),
    deleted: () => faker.datatype.boolean(),
  }
);
