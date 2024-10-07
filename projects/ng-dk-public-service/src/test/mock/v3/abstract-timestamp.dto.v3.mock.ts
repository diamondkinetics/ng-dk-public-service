import { AbstractTimestampDTOV3 } from '@diamondkinetics/dk-public-dto-ts';
import { faker } from '@faker-js/faker';
import { define } from 'cooky-cutter';

export const mockAbstractTimestampDTOV3 = define<AbstractTimestampDTOV3>({
  creationDate: () => faker.date.recent({ days: 7 }).toISOString(),
  lastUpdate: () => faker.date.recent({ days: 1 }).toISOString(),
});
