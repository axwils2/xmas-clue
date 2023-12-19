import Image from 'next/image';
import background from '@public/background.png';

export default function BackgroundImage() {
  return (
    <Image
      alt="background"
      src={background}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      objectFit="cover"
      className="m-0 h-screen w-screen overflow-hidden -z-10"
    />
  )
};
