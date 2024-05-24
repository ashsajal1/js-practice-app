import { useEffect, useState } from 'react';

interface SpeechOptions {
  voice?: SpeechSynthesisVoice;
  rate?: number;
  pitch?: number;
  volume?: number;
}

export function useTextToSpeech() {
  const [synth, setSynth] = useState<SpeechSynthesis | null>(null);

  useEffect(() => {
    // Get the speech synthesis service
    const speechSynthesis = window.speechSynthesis;
    setSynth(speechSynthesis);
  }, []);

  const speak = (text: string, options: SpeechOptions = {}) => {
    if (!synth) return;

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.voice = options.voice || synth.getVoices()[0];
    utterance.rate = options.rate || 1.0;
    utterance.pitch = options.pitch || 1.0;
    utterance.volume = options.volume || 1.0;

    synth.speak(utterance);
  };

  return { speak };
}