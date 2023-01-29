import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import styles from '@/styles/Avatar.module.css';

const AvatarComponent = () => (
  <div style={{ display: `flex`, gap: 20 }}>
    <Avatar.Root className={styles.AvatarRoot}>
      <Avatar.Image
        className={styles.AvatarImage}
        src="https://aerg.infura-ipfs.io/ipfs/QmYoKm262kkVSuEpQaB9frZWfQku6MmhnHMCW3WuWjY9Xy"
        alt="AERGO"
      />
      <Avatar.Fallback className={styles.AvatarFallback} delayMs={600}>
        AERGO
      </Avatar.Fallback>
    </Avatar.Root>
  </div>
);

export default AvatarComponent;
