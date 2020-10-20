export class ResourceMappings {

	public static USERS = new ResourceMappings('users');
	public static USER_PROFILE = new ResourceMappings(`${ResourceMappings.USERS}/profile`);
	public static USER_PROFILE_IMAGE = new ResourceMappings(`${ResourceMappings.USER_PROFILE}/profileImage`);
	public static GROUPS = new ResourceMappings('groups');
	public static BATTING_SESSIONS = new ResourceMappings('battingSessions');
	public static PITCHING_SESSIONS = new ResourceMappings('pitchingSessions');
	public static COMPETITION_LEVELS = new ResourceMappings('competitionLevels');
	public static BILLING = new ResourceMappings('billing');
	public static BILLING_CARDS = new ResourceMappings(`${ResourceMappings.BILLING}/cards`);
	public static BILLING_COUPONS = new ResourceMappings(`${ResourceMappings.BILLING}/coupons`);
	public static USER_BATS = new ResourceMappings('userBats');

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
