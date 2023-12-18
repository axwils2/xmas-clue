type ChildName = 'gracie' | 'nicholas' | 'olivia' | 'sam';
type ChildData = {
  [K in ChildName]: {
    clue: string,
    correctGuess: string,
    culprit: string,
    displayName: string,
    password: string,
  }
}

export const childData: ChildData = {
  gracie: {
    clue: 'I EAT A GREAT MEAL AT A CAR.',
    correctGuess: 'agaeac',
    culprit: 'elf',
    displayName: 'Gracie',
    password: 'cupcake',
  },
  nicholas: {
    clue: 'I SAW A CANDLE AND A DOG.',
    correctGuess: 'acdaag',
    culprit: 'snowman',
    displayName: 'Nicholas',
    password: 'milkandcookies',
  },
  olivia: {
    clue: 'I LET A DRAB DOG RACE A GUY. ELEGANCE WAS A FAKE AIM, AS I WAS FACE THE ODD FIGURE.',
    correctGuess: 'edbgcgegcaafeedge',
    culprit: 'penguin',
    displayName: 'Olivia',
    password: 'candycane',
  },
  sam: {
    clue: 'THE LADY RAN FAST AS A GIRAFFE. I FELL AS I GRABBED.',
    correctGuess: 'edaaagaeaagbd',
    culprit: 'reindeer',
    displayName: 'Sam',
    password: 'gingerbreadman',
  },
}
