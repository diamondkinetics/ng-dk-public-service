import {
  AbstractSyncableDTOV3,
  ExportEventType,
  ExportEventSource,
  ExportRequestDTOV3,
} from '@diamondkinetics/dk-public-dto-ts';
import { faker } from '@faker-js/faker';
import { extend } from 'cooky-cutter';
import { mockAbstractSyncableDTOV3 } from './abstract-syncable.dto.v3.mock';
import { mockGroupDTOV4 } from '../v4/group.dto.v4.mock';
import { mockUserProfileBasicsDTOV3 } from './../v3/user-profile-basics.dto.v3.mock';

export const mockExportRequestDTOV3 = extend<AbstractSyncableDTOV3, ExportRequestDTOV3>(mockAbstractSyncableDTOV3, {
  eventSource: () => faker.helpers.arrayElement(ExportEventSource.asArray().map(s => s.getName())),
  eventType: () => faker.helpers.arrayElement(ExportEventType.asArray().map(t => t.getName())),
  groupUuid: () => mockGroupDTOV4().uuid ?? faker.string.uuid(),
  includeCoaches: () => faker.datatype.boolean(),
  requestingUser: () => mockUserProfileBasicsDTOV3(),
});
