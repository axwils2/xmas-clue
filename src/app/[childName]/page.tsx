'use client'

import {useState} from 'react';
import {useParams} from 'next/navigation';

import BackgroundImage from '@/components/background-image';
import PianoClue from '@/components/piano-clue';
import {ChildName} from '@/constants';

export default function Page() {
  const [pianoVisible, setPianoVisible] = useState(false);
  const [hintCount, setHintCount] = useState(0);
  const params = useParams();
  const childName = params.childName as ChildName;

  function handleReadyClick() {
    setPianoVisible(true);
  }

  function handleHintClick() {
    setHintCount(prev => (Math.min(prev + 1, 3)));
  }

  return (
    <div className="min-h-screen flex justify-center items-center gap-4 p-4">
      <BackgroundImage />
      <div className="flex flex-col gap-6 max-w-xs">
        <div>
          <h4>Poem:</h4>
          <p>There was a witness that saw who,</p>
          <p>and with love of music, devised a clue.</p>
          <p className="mt-4">The piano is the key</p>
          <p>and can help eliminate the other THREE.</p>
          {!pianoVisible && <button className="btn bg-xmas-green mt-4" onClick={handleReadyClick}>Ready?!</button>}
        </div>
        <div className="flex flex-col">
          {hintCount > 0 && (
            <p>Hint 1: What letters in the clue are musical notes?</p>
          )}
          {hintCount > 1 && (
            <p>Hint 2: The number THREE will set a message free!</p>
          )}
          {hintCount > 2 && (
            <p>Hint 3: Use the numbers below the clue to help play the piano!</p>
          )}
          {pianoVisible && hintCount <= 2 && (
            <button className="btn bg-xmas-green" onClick={handleHintClick} disabled={hintCount > 2}>
              Need {hintCount > 0 ? 'another' : 'a'} hint?
            </button>
          )}
        </div>
      </div>
      {pianoVisible && <PianoClue childName={childName} />}
    </div>
  );
}
