export interface IUser {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

export interface IUserDetails extends IUser{
  bio: any;
  blog: string;
  company: string;
  created_at: string;
  email: any;
  followers: number;
  following: number;
  hireable: any;
  location: string;
  name: string;
  public_gists: number;
  public_repos: number;
  updated_at: string;
}
