import { useState, useEffect } from 'react';

export default function Message({ text }: { text: string }) {

    const [displayedQuestion, setDisplayedQuestion] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayedQuestion(prev => prev + text.charAt(currentIndex));
                currentIndex++;
            } else {
                clearInterval(intervalId);
            }
        }, 30);

        return () => clearInterval(intervalId);
    }, [text]);

    return (
        <div className="p-2 w-3/4 border rounded">
            {displayedQuestion}
        </div>
    );
}
