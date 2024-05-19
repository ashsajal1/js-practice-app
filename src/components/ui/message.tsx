import { useState, useEffect } from 'react';

export default function Message({ text }: { text: string }) {
    const [displayedQuestion, setDisplayedQuestion] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayedQuestion(prev => prev + text.charAt(currentIndex));
                setCurrentIndex(prevIndex => prevIndex + 1);
            } else {
                clearInterval(intervalId);
            }
        }, 30);

        return () => clearInterval(intervalId);
    }, [text, currentIndex]);

    return (
        <div className="p-2 w-3/4 border rounded">
            {displayedQuestion}
        </div>
    );
}
