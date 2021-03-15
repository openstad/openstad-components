export interface Api {
  url: string,
  headers: {[key: string]: string},
  isUserLoggedIn: boolean
}

export interface ConfigState {
  api: Api,
  siteId: number
}
