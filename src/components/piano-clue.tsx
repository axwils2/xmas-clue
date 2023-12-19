'use client'

import {useEffect, useState} from 'react';
import {MidiNumbers, Piano} from 'react-piano';
import 'react-piano/dist/styles.css';

import SoundfontProvider from '@/components/soundfont-provider';
import Guess from '@/components/guess';
import {childData, ChildName} from '@/constants';
import { calcMaxGuessLength } from '@/utils';

const noteRange = {
  first: MidiNumbers.fromNote('c3'),
  last: MidiNumbers.fromNote('b3'),
};

const keyboardShortcuts = [
  { key: "c", midiNumber: MidiNumbers.fromNote('c3') },
  { key: "d", midiNumber: MidiNumbers.fromNote('d3') },
  { key: "e", midiNumber: MidiNumbers.fromNote('e3') },
  { key: "f", midiNumber: MidiNumbers.fromNote('f3') },
  { key: "g", midiNumber: MidiNumbers.fromNote('g3') },
  { key: "a", midiNumber: MidiNumbers.fromNote('a3') },
  { key: "b", midiNumber: MidiNumbers.fromNote('b3') },
];

type Props = {
  childName: ChildName,
  onCorrectGuess: () => void,
}

export default function PianoClue({childName, onCorrectGuess}: Props) {
  const [currentGuess, setCurrentGuess] = useState<string[]>([]);
  const [guessHistory, setGuessHistory] = useState<string[][]>([]);
  const {clue, correctGuess} = childData[childName];
  const maxGuessLength = calcMaxGuessLength(correctGuess)
  const guessCorrect = correctGuess === currentGuess.join('');

  function handlePlayNote(playNote: (midiNumber: string) => void) {
    return (midiNumber: string) => {
      const shortCut = keyboardShortcuts.find(shortCut => shortCut.midiNumber === midiNumber);

      if (shortCut && !guessCorrect) {
        setCurrentGuess(prev => ([...prev, shortCut.key]));
      }

      playNote(midiNumber);
    };
  };

  useEffect(() => {
    if (currentGuess.length === maxGuessLength) {
      if (guessCorrect) {
        onCorrectGuess();
      } else {
        setGuessHistory(prev => ([...prev, currentGuess]));
        setCurrentGuess([]);
      }
    }
  }, [currentGuess]);

  return (
    <div className="flex justify-center gap-4">
      <div style={{ width: 400 }} className="flex flex-col justify-center gap-4">
        <div>
          <p className="font-bold text-xmas-red">Directions:</p>
          <p>Use the poem and witness clue below to play a secret musical score. When you play the notes in the correct order, the suspect will be revealed!</p>
        </div>
        <div style={{ height: 174 }}>
          <SoundfontProvider
            render={({ isLoading, playNote, stopNote }) => (
              <Piano
                noteRange={noteRange}
                width={400}
                playNote={handlePlayNote(playNote)}
                stopNote={stopNote}
                disabled={isLoading}
                keyboardShortcuts={keyboardShortcuts}
              />
            )}
          />
        </div>
        <div>
          <p className="font-bold text-xmas-red">Your Clue:</p>
          <div className="flex">
            {clue.split('').map(char => (
              <div className={`${char === ' ' && 'mr-1'}`}>{char}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-y-8">
        <div className="flex flex-col items-center">
          <p className="font-bold text-xmas-red">Current Guess:</p>
          <Guess guess={currentGuess} correctGuess={correctGuess} showCorrectGuesses={guessCorrect} />
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-xmas-red">Past Guesses:</p>
          <div className="max-h-52 overflow-auto">
            {guessHistory.toReversed().map((pastGuess, index) => (
              <div className="mb-4">
                <Guess
                  key={`past-guess-${pastGuess.join('')}-${index}`}
                  guess={pastGuess}
                  correctGuess={correctGuess}
                  showCorrectGuesses
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
