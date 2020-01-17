import { RegisterWithProfileRequestDTOV2 } from '@diamondkinetics/dk-public-dto-ts';
import { mockUserProfileDTOV2 } from './user-profile.mock.dto.v2';

export const mockRegisterWithProfileRequestDTOV2: RegisterWithProfileRequestDTOV2 = {
	firstName: mockUserProfileDTOV2.firstName,
	lastName: mockUserProfileDTOV2.lastName,
	email: mockUserProfileDTOV2.primaryEmail,
	username: mockUserProfileDTOV2.nickname,
	password: 'temporary',
	preferences: mockUserProfileDTOV2.preferences,
	competitionLevelUuid: mockUserProfileDTOV2.competitionLevelUuid,
	coach: mockUserProfileDTOV2.coach,
	zipCode: mockUserProfileDTOV2.zipCode,
	birthDate: mockUserProfileDTOV2.birthDate,
	height: mockUserProfileDTOV2.height,
	weight: mockUserProfileDTOV2.weight,
	profileImageUrl: mockUserProfileDTOV2.profileImageUrl,
	battingOrientation: mockUserProfileDTOV2.battingOrientation,
	playType: mockUserProfileDTOV2.playType,
	hittingGoal: mockUserProfileDTOV2.hittingGoal,
	privateProfile: false,
	userMetaData: mockUserProfileDTOV2.userMetaData,
	teamName: null,
	teamUuid: null,
	source: null
};
