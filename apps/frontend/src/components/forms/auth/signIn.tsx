import React, { FC } from 'react';

import { IProps } from './types';
import { Input } from '@/common/components/input/input';
import { EAuthFormFields } from '@/containers/forms/auth/types';

export const SignIn: FC<IProps> = (props) => {
  const {
    formik: {
      handleChange,
      handleSubmit,
      values: { email, password },
    },
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id={EAuthFormFields.email}
        onChange={handleChange}
        label="Email"
        placeholder="Email"
        value={email}
      />
      <Input
        id={EAuthFormFields.password}
        onChange={handleChange}
        label="Password"
        placeholder="Password"
        value={password}
        type="password"
      />
    </form>
  );
};
