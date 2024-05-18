import { useState } from 'react';
import Message from '../components/ui/message';

export default function Interview() {
    const [messages, setMessages] = useState<{ user: string; text: string }[]>([]);
    const [input, setInput] = useState('');

    const handleSendMessage = () => {
        if (input.trim()) {
            const newMessages = [...messages, { user: 'User', text: input.trim() }];
            setMessages(newMessages);
            setInput('');

            // Simulate a robot response after a delay
            setTimeout(() => {
                const robotMessage = { user: 'Robot', text: generateRobotResponse(input.trim()) };
                setMessages(prevMessages => [...prevMessages, robotMessage]);
            }, 1000);
        }
    };

    const generateRobotResponse = (userMessage: string) => {
        // Simple example response
        return `You said: "${userMessage}"`;
    };

    return (
        <div className="p-4">
            <div className="mb-4">
                {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.user === 'User' ? 'justify-end' : 'justify-start'}`}>
                        <Message text={message.text} />
                    </div>
                ))}
            </div>
            <div className="flex">
                <input
                    className="border p-2 flex-grow"
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Type a message"
                />
                <button className="border p-2 ml-2" onClick={handleSendMessage}>
                    Send
                </button>
            </div>
        </div>
    );
}
