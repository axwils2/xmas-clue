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
          <p className="font-bold text-xmas-red">Poem:</p>
          <p>There was a witness that saw who,</p>
          <p>and with love of music, devised a clue.</p>
          <p className="mt-4">The piano is the key</p>
          <p>and can help eliminate the other THREE.</p>
          {!pianoVisible && <button className="btn bg-xmas-green text-white mt-4" onClick={handleReadyClick}>Ready?!</button>}
        </div>
        <div className="flex flex-col">
          {hintCount > 0 && (
            <p><span className="font-bold text-xmas-red">Hint 1:</span> What letters in the clue are musical notes?</p>
          )}
          {hintCount > 1 && (
            <p><span className="font-bold text-xmas-red">Hint 2:</span> The number THREE will set a message free!</p>
          )}
          {hintCount > 2 && (
            <div>
              <p><span className="font-bold text-xmas-red">Hint 3:</span> See the example below and apply it to your clue to help play the piano!</p>
              <div className="flex">
                <div className="flex flex-col items-center">
                  <span>T</span>
                  <span>1</span>
                </div>
                <div className="flex flex-col items-center">
                  <span>H</span>
                  <span>2</span>
                </div>
                <div className="flex flex-col items-center">
                  <span>E</span>
                  <span>3</span>
                </div>
                <div className="w-2" />
                <div className="flex flex-col items-center">
                  <span>F</span>
                  <span>1</span>
                </div>
                <div className="flex flex-col items-center">
                  <span>I</span>
                  <span>2</span>
                </div>
                <div className="flex flex-col items-center">
                  <span>N</span>
                  <span>3</span>
                </div>
                <div className="flex flex-col items-center">
                  <span>A</span>
                  <span>1</span>
                </div>
                <div className="flex flex-col items-center">
                  <span>L</span>
                  <span>2</span>
                </div>
                <div className="w-2" />
                <div className="flex flex-col items-center">
                  <span>H</span>
                  <span>3</span>
                </div>
                <div className="flex flex-col items-center">
                  <span>I</span>
                  <span>1</span>
                </div>
                <div className="flex flex-col items-center">
                  <span>N</span>
                  <span>2</span>
                </div>
                <div className="flex flex-col items-center">
                  <span>T</span>
                  <span>3</span>
                </div>
              </div>
            </div>
          )}
          {pianoVisible && hintCount <= 2 && (
            <button className="btn bg-xmas-green text-white" onClick={handleHintClick} disabled={hintCount > 2}>
              Need {hintCount > 0 ? 'another' : 'a'} hint?
            </button>
          )}
        </div>
      </div>
      {pianoVisible && <PianoClue childName={childName} />}
    </div>
  );
}
