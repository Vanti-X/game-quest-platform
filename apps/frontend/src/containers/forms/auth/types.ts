export interface IAuthForm {
  email: string;
  password: string;
  confirmPassword: string;
  userName: string;
}

export type TSignInAuthFormValues = Omit<
  IAuthForm,
  'confirmPassword' | 'userName'
>;

export enum EAuthFormFields {
  email = 'email',
  password = 'password',
  confirmPassword = '<PASSWORD>',
  userName = 'userName',
}
