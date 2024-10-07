import { LeaderboardResultDTOV2 } from '@diamondkinetics/dk-public-dto-ts';
import { faker } from '@faker-js/faker';
import { define } from 'cooky-cutter';
import { mockGroupDTOV4 } from '../v4/group.dto.v4.mock';
import { mockLeaderboardDTOV2 } from './leaderboard.dto.v2.mock';
import { mockUserProfileBasicsDTOV2 } from './user-profile-basics.dto.v2.mock';

export const mockLeaderboardResultDTOV2 = define<LeaderboardResultDTOV2>({
  leaderboardUuid: () => mockLeaderboardDTOV2().uuid,
  leaderboardName: () => mockLeaderboardDTOV2().fullName,
  user: () => mockUserProfileBasicsDTOV2(),
  groupName: () => mockGroupDTOV4().fullName,
  leaderboardRank: () => faker.number.int(10),
  metricValue: () => faker.number.int(3000),
  metricUnit: () => faker.science.unit().name,
  change: () => undefined,
  numReps: () => undefined,
});
