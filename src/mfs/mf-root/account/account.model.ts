export interface AccountModel {
  id: number;
  username: string;
  login: string;
  password: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  designedName: string;
  langKey: string;
  imageUrl: string;
  tenant: any;
  authorities: string[];
  isDeleted: boolean;
  activated: boolean;
}
