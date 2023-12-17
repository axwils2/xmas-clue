'use client'

import {useParams} from 'next/navigation';

import PianoClue from '@/components/piano-clue';

export default function Page() {
  const { childName } = useParams();

  return (
    <div>
      <div>{childName}</div>
      <PianoClue />
    </div>
  );
}
