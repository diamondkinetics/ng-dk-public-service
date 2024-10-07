import { PendingGroupImportConflictDTOV3, GroupImportConflictType } from '@diamondkinetics/dk-public-dto-ts';
import { faker } from '@faker-js/faker';
import { define } from 'cooky-cutter';

export const mockPendingGroupImportConflictDTOV3 = define<PendingGroupImportConflictDTOV3>({
  conflictType: () => faker.helpers.arrayElement(GroupImportConflictType.asArray().map(ct => ct.getName())),
  conflictColumn: () => faker.number.int(20),
});
