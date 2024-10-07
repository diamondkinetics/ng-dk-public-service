import { PendingGroupImportRowDTOV3 } from '@diamondkinetics/dk-public-dto-ts';
import { faker } from '@faker-js/faker';
import { define, sequence } from 'cooky-cutter';

export const mockPendingGroupImportRowDTOV3 = define<PendingGroupImportRowDTOV3>({
  rowNumber: sequence,
  values: () => Array.from({ length: 3 }, () => faker.company.buzzAdjective()),
});
