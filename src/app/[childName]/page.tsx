'use client'

import {useParams} from 'next/navigation';

import PianoClue from '@/components/piano-clue';
import {childData, ChildName} from '@/constants';

export default function Page() {
  const params = useParams();
  const childName = params.childName as ChildName;
  const data = childData[childName];

  return (
    <>
      <div className="font-dancing-script text-christmas-gold text-center text-4xl my-4">
        Keep Going, {data.displayName}!
      </div>
      <PianoClue childName={childName} />
    </>
  );
}
