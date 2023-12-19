import Image from 'next/image';

import {ChildName, childData, culpritMap} from '@/constants';

type Props = {
  childName: ChildName,
  visible: boolean,
};

export default function CulpritOverlay({childName, visible}: Props) {
  const {culprit} = childData[childName];
  const src = culpritMap[culprit]

  return (
    <div style={{ background: 'rgba(0,0,0,0.5)' }} className={`fixed w-screen h-screen flex flex-col justify-center items-center transition-opacity duration-1000 ${visible ? 'z-10 opacity-100' : '-z-10 opacity-0'}`}>
      <p className="text-xmas-gold text-4xl mb-8">Congrats! The culprit is:</p>
      <Image
        alt={`The culprit is ${culprit}`}
        src={src}
        placeholder="blur"
        quality={100}
      />
    </div>
  )
}

