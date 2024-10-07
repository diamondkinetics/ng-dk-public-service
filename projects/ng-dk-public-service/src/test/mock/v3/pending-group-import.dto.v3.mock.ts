import { PendingGroupImportDTOV3 } from '@diamondkinetics/dk-public-dto-ts';
import { faker } from '@faker-js/faker';
import { define } from 'cooky-cutter';
import { mockPendingGroupImportRowDTOV3 } from './pending-group-import-row.dto.v3.mock';

export const mockPendingGroupImportDTOV3 = define<PendingGroupImportDTOV3>({
  groupImportUuid: () => faker.string.uuid(),
  headers: () => Array.from({ length: 3 }, () => faker.company.buzzNoun()),
  rows: () => [
    mockPendingGroupImportRowDTOV3(),
    mockPendingGroupImportRowDTOV3(),
    mockPendingGroupImportRowDTOV3(),
    mockPendingGroupImportRowDTOV3(),
    mockPendingGroupImportRowDTOV3(),
  ],
  confirmed: () => faker.datatype.boolean(),
});
