export class ResourceMapping {

	public static USERS = new ResourceMapping('users');
	public static USER_PROFILE = new ResourceMapping(`${ResourceMapping.USERS}/profile`);
	public static USER_PROFILE_IMAGE = new ResourceMapping(`${ResourceMapping.USER_PROFILE}/profileImage`);
	public static GROUPS = new ResourceMapping('groups');
	public static GROUPS_SEARCH = new ResourceMapping(`${ResourceMapping.GROUPS}/search`);
	public static GROUP_MEMBERSHIPS = new ResourceMapping('groupMemberships');
	public static BATTING_SESSIONS = new ResourceMapping('battingSessions');
	public static PITCHING_SESSIONS = new ResourceMapping('pitchingSessions');
	public static COMPETITION_LEVELS = new ResourceMapping('competitionLevels');
	public static BILLING = new ResourceMapping('billing');
	public static BILLING_CARDS = new ResourceMapping(`${ResourceMapping.BILLING}/cards`);
	public static BILLING_COUPONS = new ResourceMapping(`${ResourceMapping.BILLING}/coupons`);
	public static BILLING_TRIAL = new ResourceMapping(`${ResourceMapping.BILLING}/trial`);
	public static USER_BATS = new ResourceMapping('userBats');
	public static BAT_MODELS = new ResourceMapping('batModels');
	public static OAUTH = new ResourceMapping('oauth');
	public static OAUTH_CLIENTS = new ResourceMapping(`${ResourceMapping.OAUTH}/clients`);
	public static OAUTH_AUTHORIZE = new ResourceMapping(`${ResourceMapping.OAUTH}/authorize`);
	public static WEB_HOOKS = new ResourceMapping('webHooks');
	public static POPULATION_DATA = new ResourceMapping('swingPopulationData');
	public static LEADERBOARDS = new ResourceMapping('leaderboards');

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
