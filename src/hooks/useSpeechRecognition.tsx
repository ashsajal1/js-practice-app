import { useState, useEffect } from 'react';

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onend: () => void;
}

interface SpeechRecognitionEvent extends Event {
  resultIndex: number;
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResultList {
  item(index: number): SpeechRecognitionResult;
  length: number;
}

interface SpeechRecognitionResult {
  isFinal: boolean;
  [0]: {
    transcript: string;
  };
}

interface UseSpeechRecognitionReturn {
  transcript: string;
  isRecording: boolean;
  startRecording: () => void;
  stopRecording: () => void;
}

const useSpeechRecognition = (): UseSpeechRecognitionReturn => {
  const [transcript, setTranscript] = useState<string>('');
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const SpeechRecognitionInstance = new (window as any).webkitSpeechRecognition() as SpeechRecognition;
      SpeechRecognitionInstance.continuous = true;
      SpeechRecognitionInstance.interimResults = true;
      SpeechRecognitionInstance.lang = 'en-US';

      SpeechRecognitionInstance.onresult = (event: SpeechRecognitionEvent) => {
        let interimTranscript = '';
        for (let i = 0; i < event.results.length; i++) {
          if (event.results.item(i).isFinal) {
            setTranscript(event.results.item(i)[0].transcript);
          } else {
            interimTranscript += event.results.item(i)[0].transcript;
          }
        }
        setTranscript(interimTranscript);
      };

      SpeechRecognitionInstance.onend = () => {
        setIsRecording(false);
      };

      setRecognition(SpeechRecognitionInstance);

      return () => {
        SpeechRecognitionInstance.stop();
      };
    } else {
      alert('Speech Recognition is not supported on this browser.');
    }
  }, []);

  const startRecording = () => {
    if (recognition) {
      recognition.start();
      setIsRecording(true);
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