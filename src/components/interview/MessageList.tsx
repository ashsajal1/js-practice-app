import { Message as MessageType } from "../../types/message";
import { MessageItem } from "./MessageItem";
import { RefObject } from "react";

interface MessageListProps {
  messages: MessageType[];
  onOptionSelect?: (index: number) => void;
  lastMessageRef: RefObject<HTMLDivElement>;
}

export function MessageList({ messages, onOptionSelect, lastMessageRef }: MessageListProps) {
  return (
    <div className="mb-4 flex flex-col gap-2 w-full">
      {messages.map((message, index) => (
        <MessageItem
          key={index}
          message={message}
          onOptionSelect={onOptionSelect}
          isLast={index === messages.length - 1}
          lastMessageRef={lastMessageRef}
        />
      ))}
    </div>
  );
}
