import { AbstractSyncableDTOV3, AbstractSensorEventDTOV3, BattingOrientation } from '@diamondkinetics/dk-public-dto-ts';
import { faker } from '@faker-js/faker';
import { extend } from 'cooky-cutter';
import { mockAbstractSyncableDTOV3 } from './abstract-syncable.dto.v3.mock';
import { mockVideoDTOV3 } from './video.dto.v3.mock';

export const mockAbstractSensorEventDTOV3 = extend<AbstractSyncableDTOV3, AbstractSensorEventDTOV3>(
  mockAbstractSyncableDTOV3,
  {
    parentSessionUuid: () => faker.string.uuid(),
    startTime: () => faker.string.alphanumeric(12),
    sensorTimeSeconds: () => faker.date.past().getTime(),
    eventOffset: () => faker.number.int(1000),
    flagged: () => faker.datatype.boolean(),
    hasVideo: () => faker.datatype.boolean(),
    rawSensorData: () => faker.string.alphanumeric(30),
    hardwareVersionMajor: () => faker.number.int(9),
    hardwareVersionMinor: () => faker.number.int(9),
    hardwareSerialNumber: () => faker.string.alphanumeric(16),
    firmwareVersion: () => faker.string.alphanumeric(6),
    handedness: () => faker.helpers.arrayElement(BattingOrientation.asArray(true).map(bo => bo.getName())),
    visionVersion: () => faker.string.alphanumeric(6),
    analyzerVersion: () => faker.string.alphanumeric(6),
    video: () => mockVideoDTOV3(),
  }
);
