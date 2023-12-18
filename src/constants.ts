export type ChildName = 'gracie' | 'nicholas' | 'olivia' | 'sam';

type ChildData = {
  [K in ChildName]: {
    clue: string,
    correctGuess: string,
    culprit: string,
    displayName: string,
    hint: string,
    password: string,
  }
}

export const childData: ChildData = {
  gracie: {
    clue: 'I EAT A GREAT MEAL AT A CAR.',
    correctGuess: 'agaeac',
    culprit: 'elf',
    displayName: 'Gracie',
    hint: '1 231 2 31231 2312 31 2312',
    password: 'cupcake',
  },
  nicholas: {
    clue: 'I SAW A CANDLE AND A DOG.',
    correctGuess: 'acdaag',
    culprit: 'snowman',
    displayName: 'Nicholas',
    hint: '1 231 2 31231 2312 31 2312',
    password: 'milkandcookies',
  },
  olivia: {
    clue: 'I LET A DRAB DOG RACE A GUY. ELEGANCE WAS A FAKE AIM, AS I WAS FACE THE ODD FIGURE.',
    correctGuess: 'edbgcgegcaafeedge',
    culprit: 'penguin',
    displayName: 'Olivia',
    hint: '1 231 2 31231 2312 31 2312',
    password: 'candycane',
  },
  sam: {
    clue: 'THE LADY RAN FAST AS A GIRAFFE. I FELL AS I GRABBED.',
    correctGuess: 'edaaagaeaagbd',
    culprit: 'reindeer',
    displayName: 'Sam',
    hint: '1 231 2 31231 2312 31 2312',
    password: 'gingerbreadman',
  },
}
