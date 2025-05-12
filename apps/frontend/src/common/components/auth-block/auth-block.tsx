import React, { ReactNode, FC } from 'react';

import styles from './auth-block.module.scss';

interface TProps {
  children: ReactNode;
}

export const AuthBlock: FC<TProps> = ({ children }) => (
  <div className={styles.block}>{children}</div>
);
