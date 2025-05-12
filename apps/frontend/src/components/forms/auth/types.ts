import { FormikProps } from 'formik';

import { TSignInAuthFormValues } from '@/containers/forms/auth/types';

export interface IProps {
  formik: FormikProps<TSignInAuthFormValues>;
}
