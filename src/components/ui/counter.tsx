import { useState, useEffect, HTMLAttributes } from 'react';

interface CounterProps extends HTMLAttributes<HTMLSpanElement> {
    value?: number,
    speed?: number
}

const Counter = ({ value = 113, speed = 40 }: CounterProps) => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount >= value) {
                    return value;
                }
                return prevCount + 1;
            });
        }, speed);

        return () => clearInterval(interval);
    }, [speed, value]);

    return (
        <span>{count}</span>
    );
};

export default Counter;