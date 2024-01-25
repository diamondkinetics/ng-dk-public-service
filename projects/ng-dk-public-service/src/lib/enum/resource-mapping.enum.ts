export class ResourceMapping {
  public static readonly USERS = new ResourceMapping('users');
  public static readonly PROFILE = new ResourceMapping('profile');
  public static readonly USER_PROFILE = new ResourceMapping(`${ResourceMapping.USERS}/${ResourceMapping.PROFILE}`);
  public static readonly USER_PROFILE_IMAGE = new ResourceMapping(`${ResourceMapping.USER_PROFILE}/profileImage`);
  public static readonly USER_PROFILE_SEARCH = new ResourceMapping(`${ResourceMapping.USER_PROFILE}/search`);
  public static readonly GROUPS = new ResourceMapping('groups');
  public static readonly GROUPS_SEARCH = new ResourceMapping(`${ResourceMapping.GROUPS}/search`);
  public static readonly GROUP_MEMBERSHIPS = new ResourceMapping('groupMemberships');
  public static readonly BATTING_SESSIONS = new ResourceMapping('battingSessions');
  public static readonly PITCHING_SESSIONS = new ResourceMapping('pitchingSessions');
  public static readonly COMPETITION_LEVELS = new ResourceMapping('competitionLevels');
  public static readonly BILLING = new ResourceMapping('billing');
  public static readonly BILLING_CARDS = new ResourceMapping(`${ResourceMapping.BILLING}/cards`);
  public static readonly BILLING_COUPONS = new ResourceMapping(`${ResourceMapping.BILLING}/coupons`);
  public static readonly BILLING_TRIAL = new ResourceMapping(`${ResourceMapping.BILLING}/trial`);
  public static readonly USER_BATS = new ResourceMapping('userBats');
  public static readonly BAT_MODELS = new ResourceMapping('batModels');
  public static readonly OAUTH = new ResourceMapping('oauth');
  public static readonly OAUTH_CLIENTS = new ResourceMapping(`${ResourceMapping.OAUTH}/clients`);
  public static readonly OAUTH_AUTHORIZE = new ResourceMapping(`${ResourceMapping.OAUTH}/authorize`);
  public static readonly WEB_HOOKS = new ResourceMapping('webHooks');
  public static readonly POPULATION_DATA = new ResourceMapping('swingPopulationData');
  public static readonly LEADERBOARDS = new ResourceMapping('leaderboards');
  public static readonly EXPORT_REQUESTS = new ResourceMapping('exportRequests');
  public static readonly ACCOUNT_GROUPS = new ResourceMapping('accountGroups');
  public static readonly SWINGS = new ResourceMapping('swings');
  public static readonly SWING_SCORES = new ResourceMapping('swingScores');
  public static readonly SWING_SCORE_POPULATIONS = new ResourceMapping('swingScorePopulations');
  public static readonly SWING_PERFORMANCE_SUMMARY = new ResourceMapping('swingPerformanceSummary');
  public static readonly PITCHES = new ResourceMapping('pitches');
  public static readonly CHALLENGES = new ResourceMapping('challenges');
  public static readonly CHALLENGE_PROGRESS = new ResourceMapping('challengeProgress');
  public static readonly USER_CONNECTIONS = new ResourceMapping(`${ResourceMapping.USERS}/connections`);

  constructor(private readonly path: string) {}

  public getPath(): string {
    return this.path;
  }

  public toString(): string {
    return this.getPath();
  }
}
