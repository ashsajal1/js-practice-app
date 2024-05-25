// Extend the Window interface to include webkitSpeechRecognition
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    webkitSpeechRecognition: any;
  }
}

// Declare global variables for SpeechRecognition and SpeechRecognitionEvent
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// declare let SpeechRecognition: any;
// eslint-disable-next-line react-refresh/only-export-components, @typescript-eslint/no-unused-vars
// declare let SpeechRecognitionEvent: any;

import { useState } from 'react';

interface UseSpeechRecognitionReturn {
  transcript: string;
  isRecording: boolean;
  startRecording: () => void;
  stopRecording: () => void;
}

const useSpeechRecognition = (): UseSpeechRecognitionReturn => {
  const [transcript, setTranscript] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

  const startRecording = () => {
    if ('webkitSpeechRecognition' in window) {
      const SpeechRecognitionInstance = new window.webkitSpeechRecognition();
      SpeechRecognitionInstance.continuous = true;
      SpeechRecognitionInstance.interimResults = true;
      SpeechRecognitionInstance.lang = 'en-US';

      SpeechRecognitionInstance.onresult = (event: SpeechRecognitionEvent) => {
        let interimTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            setTranscript(event.results[i][0].transcript);
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }
        setTranscript(interimTranscript);
      };

      SpeechRecognitionInstance.onend = () => {
        setIsRecording(false);
      };

      SpeechRecognitionInstance.start();
      setRecognition(SpeechRecognitionInstance);
      setIsRecording(true);
    } else {
      alert('Speech Recognition is not supported on this browser.');
    }
  };

  const stopRecording = () => {
    if (recognition) {
      recognition.stop();
      setIsRecording(false);
    }
  };

  return { transcript, isRecording, startRecording, stopRecording };
};

export default useSpeechRecognition;