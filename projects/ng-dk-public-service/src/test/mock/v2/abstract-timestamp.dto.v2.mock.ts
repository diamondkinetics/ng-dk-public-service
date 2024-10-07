import { AbstractTimestampDTOV2 } from '@diamondkinetics/dk-public-dto-ts';
import { faker } from '@faker-js/faker';
import { define } from 'cooky-cutter';

export const mockAbstractTimestampDTOV2 = define<AbstractTimestampDTOV2>({
  creationDate: () => faker.date.recent({ days: 30 }).toISOString(),
  lastUpdate: () => faker.date.recent({ days: 1 }).toISOString(),
});
