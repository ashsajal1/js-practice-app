import { useEffect, useState, useRef } from 'react';

interface SpeechOptions {
  voice?: SpeechSynthesisVoice;
  rate?: number;
  pitch?: number;
  volume?: number;
}

export function useTextToSpeech() {
  const [synth, setSynth] = useState<SpeechSynthesis | null>(null);
  const currentUtterance = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    // Get the speech synthesis service
    const speechSynthesis = window.speechSynthesis;
    setSynth(speechSynthesis);

    // Clean up the current utterance when the component unmounts
    return () => {
      if (currentUtterance.current) {
        speechSynthesis.cancel();
      }
    };
  }, []);

  const speak = (text: string, options: SpeechOptions = {}) => {
    if (!synth) return;

    // Cancel the current utterance before starting a new one
    if (currentUtterance.current) {
      synth.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.voice = options.voice || synth.getVoices()[0];
    utterance.rate = options.rate || 1.0;
    utterance.pitch = options.pitch || 1.0;
    utterance.volume = options.volume || 1.0;

    currentUtterance.current = utterance;
    synth.speak(utterance);
  };

  const stop = () => {
    if (!synth || !currentUtterance.current) return;
    synth.cancel();
    currentUtterance.current = null;
  };

  return { speak, stop };
}