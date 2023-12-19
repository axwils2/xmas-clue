import elf from '@/assets/elf.png';
import penguin from '@/assets/penguin.png';
import reindeer from '@/assets/reindeer.png';
import snowman from '@/assets/snowman.png';

import {StaticImageData} from 'next/image';

export type ChildName = 'gracie' | 'nicholas' | 'olivia' | 'sam';

type ChildData = {
  [K in ChildName]: {
    clue: string,
    correctGuess: string,
    culprit: Culprit,
    displayName: string,
    password: string,
  }
}

type Culprit = 'elf' | 'penguin' | 'reindeer' | 'snowman';

type CulpritMap = {
  [K in Culprit]: StaticImageData
}

export const culpritMap: CulpritMap = {
  elf,
  penguin,
  reindeer,
  snowman
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
    correctGuess: 'edbgcgegcaaaafeedge',
    culprit: 'penguin',
    displayName: 'Olivia',
    password: 'candycane',
  },
  sam: {
    clue: 'THE LADY RAN FAST AS A GIRAFFE. I FELL AS I GRABBED.',
    correctGuess: 'edaaagaeeagbd',
    culprit: 'reindeer',
    displayName: 'Sam',
    password: 'gingerbreadman',
  },
}
