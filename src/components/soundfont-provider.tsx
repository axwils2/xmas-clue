// See https://github.com/danigb/soundfont-player
// for more documentation on prop options.
import {ReactNode, useEffect, useState} from 'react';
import Soundfont, {Player} from 'soundfont-player';

type Props = {
  render: ({isLoading, playNote, stopNote}: {isLoading: boolean, playNote: (midiNumber: string) => void, stopNote: (midiNumber: string) => void}) => ReactNode,
};

type ActiveAudioNote = { [midiNumber: string]: Player | null };

// webkitAudioContext fallback needed to support Safari
// @ts-ignore
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const SOUNDFONT_HOSTNAME = 'https://d1pzp51pvbm36p.cloudfront.net';
const FORMAT = 'mp3';
const SOUNDFONT = 'MusyngKite';
const INSTRUMENT_NAME = 'acoustic_grand_piano';

export default function SoundfontProvider({render}: Props) {
  const [activeAudioNotes, setActiveAudioNotes] = useState<ActiveAudioNote>({});
  const [instrument, setInstrument] = useState<Player | null>(null);

  useEffect(() => loadInstrument(), []);

  function loadInstrument() {
    Soundfont.instrument(
      audioContext,
      INSTRUMENT_NAME,
      {
        format: FORMAT,
        soundfont: SOUNDFONT,
        nameToUrl: (name: string, soundfont: string, format: string) => {
          return `${SOUNDFONT_HOSTNAME}/${soundfont}/${name}-${format}.js`;
        },
      }).then(loadedInstrument => {
        setInstrument(loadedInstrument)
    });
  };

  function playNote(midiNumber: string) {
    if (!instrument) return;

    audioContext.resume().then(() => {
      const audioNote = instrument.play(midiNumber);
      setActiveAudioNotes(prev => ({...prev, [midiNumber]: audioNote}));
    });
  };

  function stopNote(midiNumber: string) {
    audioContext.resume().then(() => {
      const audioNote = activeAudioNotes[midiNumber];
      if (!audioNote) return;

      audioNote.stop();
      setActiveAudioNotes(prev => ({...prev, [midiNumber]: null }));
    });
  };

  return render({
    isLoading: !instrument,
    playNote,
    stopNote,
  });
}
