export interface ILoginUser {
  id: number;
  email: string;
  name: string;
  password?: string;
  accessToken: string;
}
