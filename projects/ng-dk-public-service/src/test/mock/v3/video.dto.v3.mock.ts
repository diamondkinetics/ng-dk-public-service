import { AbstractSyncableDTOV3, VideoDTOV3 } from '@diamondkinetics/dk-public-dto-ts';
import { faker } from '@faker-js/faker';
import { extend } from 'cooky-cutter';
import { mockAbstractSyncableDTOV3 } from './abstract-syncable.dto.v3.mock';

export const mockVideoDTOV3 = extend<AbstractSyncableDTOV3, VideoDTOV3>(mockAbstractSyncableDTOV3, {
  url: () => faker.internet.url(),
  processedUrl: () => faker.internet.url(),
  jsonUrl: () => faker.internet.url(),
  startTime: () => faker.date.past().toISOString(),
  audioPeakDate: () => faker.date.past().toISOString(),
  durationMillis: () => faker.number.int(5000),
  fileSize: () => faker.number.int(100000),
  finishedUploading: () => faker.datatype.boolean(),
});
