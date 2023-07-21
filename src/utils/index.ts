import { ToneData, SheetData } from "@/interfaces";
import { TimeSignatureInterface } from "@/interfaces/common";

export const getToneSequence = (
  data: SheetData,
  timeSignature: TimeSignatureInterface
) => {
  const layers = [];
  const layer1: ToneData[][] = [];
  const layer2 = [];
  const bpm = 125;
  const timeout = 60_000 / bpm;
  const audioMap: Record<number, string> = {};
  let runningTimeout = 0;
  let toneID = 0;

  data.staves.forEach((staff) => {
    // Get treble layer
    if (staff.treble && staff.treble.bars) {
      staff.treble.bars.forEach((bar) => {
        if (bar && bar.beats) {
          bar.beats.forEach((beat) => {
            if (beat && beat.type === "note" && beat.notes) {
              let beatNotes: ToneData[] = [];
              beat.notes.forEach((note) => {
                const audioPath = `/public/audio/${note.note}${note.variation}${
                  note.sharp ? "s" : ""
                }.mp3`;
                audioMap[toneID] = audioPath;
                beatNotes.push({
                  toneID,
                  timeout: runningTimeout,
                });
                runningTimeout += (timeout / beat.length) * 7;
              });
              layer1.push(beatNotes);
              toneID += 1;
            }
          });
        }
      });
    }
  });
  layers.push(layer1);

  return [layers, audioMap];
};

export const preloadAudio = (
  map: { [key: string]: string },
  callback: (audioMap: Record<string, HTMLAudioElement>) => void
) => {
  let loaded = 0;
  const audioMap: Record<string, HTMLAudioElement> = {};
  const keys = Object.keys(map);
  keys.forEach((key) => {
    const file = map[key];
    let sound = document.createElement("audio");
    sound.autoplay = false;
    sound.src = file;
    document.body.appendChild(sound);
    audioMap[key] = sound;
    sound.oncanplaythrough = () => {
      loaded += 1;
      if (loaded === keys.length) {
        callback(audioMap);
      }
    };
  });
};

export const playPreview = (
  toneSequence: ToneData[][][],
  audioMap: Record<string, HTMLAudioElement>
) => {
  toneSequence[0].forEach((beat) => {
    beat.forEach((tone) => {
      setTimeout(() => {
        audioMap[tone.toneID].play();
      }, tone.timeout);
    });
  });
};
