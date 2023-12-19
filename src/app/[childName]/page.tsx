'use client'

import {useState} from 'react';
import {useParams} from 'next/navigation';
import Confetti from 'react-confetti';
import useSound from 'use-sound';

import BackgroundImage from '@/components/background-image';
import CulpritOverlay from '@/components/culprit-overlay';
import HintExample from '@/components/hint-example';
import PianoClue from '@/components/piano-clue';
import {ChildName} from '@/constants';

export default function Page() {
  const [pianoVisible, setPianoVisible] = useState(false);
  const [hintCount, setHintCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [culpritVisible, setCulpritVisible] = useState(false);
  const [playMusic] = useSound('/holly-jolly-christmas.mp3');
  const params = useParams();
  const childName = params.childName as ChildName;

  function handleReadyClick() {
    setPianoVisible(true);
  }

  function handleHintClick() {
    setHintCount(prev => (Math.min(prev + 1, 3)));
  }

  function handleGuessCorrect() {
    playMusic();
    setShowConfetti(true)
  }

  function handleConfettiComplete() {
    setCulpritVisible(true);
  }

  return (
    <div className="min-h-screen flex justify-center items-center gap-4 p-4">
      <BackgroundImage />
      <Confetti
        run={showConfetti}
        recycle={false}
        numberOfPieces={5000}
        colors={['#C30F16', '#143306', '#FFD700', 'white']}
        tweenDuration={16000}
        onConfettiComplete={handleConfettiComplete}
      />
      <CulpritOverlay visible={culpritVisible} childName={childName} />
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
              <HintExample />
            </div>
          )}
          {pianoVisible && hintCount <= 2 && (
            <button className="btn bg-xmas-green text-white" onClick={handleHintClick} disabled={hintCount > 2}>
              Need {hintCount > 0 ? 'another' : 'a'} hint?
            </button>
          )}
        </div>
      </div>
      {pianoVisible && <PianoClue childName={childName} onCorrectGuess={handleGuessCorrect} />}
    </div>
  );
}
