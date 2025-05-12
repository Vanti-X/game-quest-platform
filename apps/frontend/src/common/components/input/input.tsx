import React, { FC } from 'react';

import { IProps } from './types';
import styles from './input.module.scss';

export const Input: FC<IProps> = (props) => {
  const { label, placeholder, ...rest } = props;

  return (
    <div className={styles.block}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputBlock}>
        <input
          placeholder={placeholder}
          className={styles.input}
          {...rest}
        />
      </div>
      <div className={styles.errorBlock}>
        <span className={styles.errorMsg}></span>
      </div>
    </div>
  );
};
