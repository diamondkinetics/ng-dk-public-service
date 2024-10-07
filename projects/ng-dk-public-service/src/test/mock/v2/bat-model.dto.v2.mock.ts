import { AbstractSyncableDTOV2, BatModelDTOV2 } from '@diamondkinetics/dk-public-dto-ts';
import { faker } from '@faker-js/faker';
import { extend, Factory } from 'cooky-cutter';
import { mockAbstractSyncableDTOV2 } from './abstract-syncable.dto.v2.mock';
import { mockBatBrandDTOV2 } from './bat-brand.dto.v2.mock';

export const mockBatModelDTOV2: Factory<BatModelDTOV2> = extend<AbstractSyncableDTOV2, BatModelDTOV2>(
  mockAbstractSyncableDTOV2,
  {
    name: () => 'DK Smart Bat',
    embeddable: () => faker.datatype.boolean(),
    embedded: () => faker.datatype.boolean(),
    brand: () => mockBatBrandDTOV2(),
  }
);
