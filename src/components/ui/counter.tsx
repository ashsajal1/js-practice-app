import { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount >= 1000) {
                    return 1000;
                }
                return prevCount + 1;
            });
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <span>{count}</span>
    );
};

export default Counter;