import React from 'react';
import Image from 'next/image';

const AvatarComponent = () => (
  <Image
    style={{ borderRadius: `100%` }}
    src="https://aerg.infura-ipfs.io/ipfs/QmYoKm262kkVSuEpQaB9frZWfQku6MmhnHMCW3WuWjY9Xy"
    alt="AERGO"
    width={150}
    height={150}
  />
);

export default AvatarComponent;
