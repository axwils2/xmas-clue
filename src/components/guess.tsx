import {calcMaxGuessLength} from '@/utils';

type Props = {
  correctGuess: string,
  guess: string[],
  showCorrectGuesses?: boolean,
}

export default function Guess({correctGuess, guess, showCorrectGuesses = false}: Props) {
  const maxGuessLength = calcMaxGuessLength(correctGuess);

  return (
    <div className="flex flex-wrap">
      {[...Array(maxGuessLength)].map((_, index) => {
        const guessLetter = guess[index] || '_';
        const correctLetterGuess = correctGuess[index] === guessLetter;
        const displayCorrect = correctLetterGuess && showCorrectGuesses;

        return (
          <div className={`mx-1 ${displayCorrect && 'text-christmas-green'}`}>{guessLetter.toUpperCase()}</div>
        );
      })}
    </div>
  );
}
