import { useCallback, useRef, useEffect } from 'react';

const useAudio = () => {
    const audioContextRef = useRef<AudioContext | null>(null);

    useEffect(() => {
        // Create a single AudioContext instance
        if (audioContextRef.current === null) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        return () => {
            // Cleanup AudioContext on component unmount
            if (audioContextRef.current) {
                audioContextRef.current.close();
                audioContextRef.current = null;
            }
        };
    }, []);

    const playTone = useCallback((frequency: number) => {
        const audioContext = audioContextRef.current;
        if (audioContext) {
            const oscillator = audioContext.createOscillator();
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
            oscillator.connect(audioContext.destination);
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.1);
        }
    }, []);

    const playSubmitTone = useCallback(() => {
        playTone(880);
    }, [playTone]);

    const playOptionTone = useCallback(() => {
        playTone(440);
    }, [playTone]);

    return { playSubmitTone, playOptionTone };
};

export default useAudio;
