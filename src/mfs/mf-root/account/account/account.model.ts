export interface AccountModel {
  id: number | null;
  username: string | null;
  login: string | null;
  password: string | null;
  phoneNumber: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  langKey: string | null;
  imageUrl: string | null;
  tenant: any | null;
  authorities: string[] | null;
  activated: boolean | null;
}
