import { useFormik } from 'formik';

import { SignIn as SignInComponent } from '@/components/forms/auth/signIn';
import { TSignInAuthFormValues } from '@/containers/forms/auth/types';

const initialValues: TSignInAuthFormValues = {
  email: '',
  password: '',
};

export const SignIn = () => {
  const formik = useFormik<TSignInAuthFormValues>({
    initialValues,
    onSubmit: (values: TSignInAuthFormValues) => {
      console.log(values);
    },
  });

  return <SignInComponent formik={formik} />;
};
