export class ResourceMappings {

	public static USERS = new ResourceMappings('users');
	public static USER_PROFILE = new ResourceMappings(`${ResourceMappings.USERS}/profile`);
	public static USER_PROFILE_IMAGE = new ResourceMappings(`${ResourceMappings.USER_PROFILE}/profileImage`);
	public static GROUPS = new ResourceMappings('groups');
	public static BATTING_SESSIONS = 'battingSessions';
	public static PITCHING_SESSIONS = 'pitchingSessions';
	public static COMPETITION_LEVELS = 'competitionLevels';

	private readonly path: string;

	constructor(path: string) {
		this.path = path;
	}

	get getPath(): string {
		return this.path;
	}

	public toString(): string {
		return this.getPath;
	}

}
