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

export default function PianoClue({childName}: {childName: ChildName}) {
  const [currentGuess, setCurrentGuess] = useState<string[]>([]);
  const [guessHistory, setGuessHistory] = useState<string[][]>([]);
  const {correctGuess} = childData[childName];
  const maxGuessLength = calcMaxGuessLength(correctGuess)

  function handlePlayNote(playNote: (midiNumber: string) => void) {
    return (midiNumber: string) => {
      const shortCut = keyboardShortcuts.find(shortCut => shortCut.midiNumber === midiNumber);

      if (shortCut) {
        setCurrentGuess(prev => ([...prev, shortCut.key]));
      }

      playNote(midiNumber);
    };
  };

  useEffect(() => {
    if (currentGuess.length === maxGuessLength) {
      setGuessHistory(prev => ([...prev, currentGuess]));
      setCurrentGuess([]);
    }
  }, [currentGuess]);

  return (
    <div className="flex justify-center gap-8">
      <div style={{ width: 600 }}>
        <SoundfontProvider
          render={({ isLoading, playNote, stopNote }) => (
            <Piano
              noteRange={noteRange}
              width={600}
              playNote={handlePlayNote(playNote)}
              stopNote={stopNote}
              disabled={isLoading}
              keyboardShortcuts={keyboardShortcuts}
            />
          )}
        />
      </div>
      <div className="flex flex-col gap-y-16">
        <div className="flex flex-col items-center">
          <h4>Current Guess:</h4>
          <Guess guess={currentGuess} correctGuess={correctGuess} />
        </div>
        <div className="flex flex-col items-center">
          <h4>Past Guesses:</h4>
          {guessHistory.map((pastGuess, index) => (
            <div className="mb-8">
              <Guess
                key={`past-guess-${index}`}
                guess={pastGuess}
                correctGuess={correctGuess}
                showCorrectGuesses
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
