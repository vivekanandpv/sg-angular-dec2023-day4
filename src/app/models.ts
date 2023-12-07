export interface BlogPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface LoginViewModel {
  username: string;
  password: string;
  checkMeOut: boolean;
}
