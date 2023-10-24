import { ToneData, SheetData, StaffData, ClefType } from "@/interfaces";
import { TimeSignatureInterface } from "@/interfaces/common";

export const getToneSequence = (
  data: SheetData,
  timeSignature: TimeSignatureInterface
): [ToneData[][], Record<string, string>] => {
  const [trebleTones, trebleMap] = getLayerTones(
    data.staves,
    timeSignature,
    "treble"
  );
  const [bassTones, bassMap] = getLayerTones(
    data.staves,
    timeSignature,
    "bass"
  );
  const layers = trebleTones.concat(bassTones);
  const audioMap: Record<string, string> = { ...trebleMap, ...bassMap };

  return [layers, audioMap];
};

export const getLayerTones = (
  staves: StaffData[],
  timeSignature: TimeSignatureInterface,
  layer: ClefType
): [ToneData[][], Record<string, string>] => {
  const tones: ToneData[][] = [];
  const bpm = 136;
  const timeout = 60_000 / bpm;
  const audioMap: Record<string, string> = {};
  const barDuration = timeout * timeSignature.beatsPerBar;
  let toneCount = 0;
  let runningTimeout = 0;

  staves.forEach((staff) => {
    // Get treble layer
    if (staff[layer] && staff[layer].bars) {
      staff[layer].bars.forEach((bar) => {
        if (bar && bar.beats) {
          bar.beats.forEach((beat) => {
            // Notes
            if (beat && beat.type === "note" && beat.notes) {
              let beatNotes: ToneData[] = [];
              beat.notes.forEach((note) => {
                const toneID = `${layer}-${toneCount}`;
                const audioPath = `/public/audio/${note.note}${note.variation}${
                  note.sharp ? "s" : ""
                }.mp3`;
                audioMap[toneID] = audioPath;
                beatNotes.push({
                  toneID,
                  timeout: runningTimeout,
                });
              });
              runningTimeout += timeout * (timeSignature.beat / beat.length);
              tones.push(beatNotes);
              toneCount += 1;
            }

            if (beat && beat.type === "rest") {
              const restDuration = timeout * (timeSignature.beat / beat.length);
              if (restDuration > barDuration) {
                runningTimeout += barDuration;
              } else {
                runningTimeout += restDuration;
              }
            }
          });
        }
      });
    }
  });
  return [tones, audioMap];
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
  toneSequence: ToneData[][],
  audioMap: Record<string, HTMLAudioElement>
) => {
  toneSequence.forEach((beat) => {
    beat.forEach((tone) => {
      setTimeout(() => {
        audioMap[tone.toneID].play();
      }, tone.timeout);
    });
  });
};
