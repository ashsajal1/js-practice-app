import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/rootReducer';

interface SpeechOptions {
  rate?: number;
  pitch?: number;
  volume?: number;
}

export function useTextToSpeech() {
  const [synth, setSynth] = useState<SpeechSynthesis | null>(null);
  const currentUtterance = useRef<SpeechSynthesisUtterance | null>(null);

  // Get selected voice from Redux store
  const selectedVoice = useSelector((state: RootState) => state.voice.voice);
  console.log("Selected voice : ", selectedVoice)
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

    const voices = synth.getVoices();
    let voiceToUse: SpeechSynthesisVoice | undefined;
    if (selectedVoice) {
      voiceToUse = voices.find(voice => voice.name === selectedVoice);
    } else {
      // Use the default voice if selectedVoice is not available
      voiceToUse = voices.find(voice => voice.default);
    }
    utterance.voice = voiceToUse || voices[0]; 
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
