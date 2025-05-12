import React from 'react';

import { AuthBlock } from '@/common/components/auth-block/auth-block';
import { SignIn } from '@/containers/forms/auth/signIn';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <AuthBlock>
        <SignIn />
      </AuthBlock>
    </div>
  );
}
