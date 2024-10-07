import { AbstractSyncableDTOV2, UserBatDTOV2, MaterialType } from '@diamondkinetics/dk-public-dto-ts';
import { faker } from '@faker-js/faker';
import { extend } from 'cooky-cutter';
import { mockAbstractSyncableDTOV2 } from './abstract-syncable.dto.v2.mock';
import { mockBatModelDTOV2 } from './bat-model.dto.v2.mock';

const batModel = () => mockBatModelDTOV2();

export const mockUserBatDTOV2 = extend<AbstractSyncableDTOV2, UserBatDTOV2>(mockAbstractSyncableDTOV2, {
  userUuid: () => faker.string.uuid(),
  name: () => 'The bazooka',
  model: () => batModel(),
  length: () => 34,
  weight: () => 31,
  price: () => faker.number.int(400),
  materialType: () => faker.helpers.arrayElement(MaterialType.asArray().map(mt => mt.getName())),
  embedded: () => batModel().embedded,
});
