import { useState, useEffect, HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

interface CounterProps extends HTMLAttributes<HTMLSpanElement> {
    value?: number,
    speed?: number,
}

const Counter = ({ value = 113, speed = 40, ...props }: CounterProps) => {
    const [count, setCount] = useState(1);
    const { className } = props

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
        <span className={cn(className)}>{count}</span>
    );
};

export default Counter;