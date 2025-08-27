import { Message as MessageType } from "../../types/message";
import Message from "../ui/message";
import { motion } from "framer-motion";
import Button from "../ui/button";

interface MessageItemProps {
  message: MessageType;
  onOptionSelect?: (index: number) => void;
  isLast: boolean;
  lastMessageRef: React.RefObject<HTMLDivElement>;
}

export function MessageItem({ 
  message, 
  onOptionSelect, 
  isLast, 
  lastMessageRef 
}: MessageItemProps) {
  const isUser = message.user === "User";
  
  return (
    <div
      className={`flex w-full ${
        isUser ? "justify-end my-6" : "justify-start"
      }`}
    >
      <div
        className={`flex gap-3 w-full md:w-3/4 ${
          isUser ? "flex-row-reverse" : ""
        }`}
      >
        <img
          className={`w-10 h-10 flex-shrink-0 rounded-full object-cover ${
            isUser ? "ml-3 bg-blue-500" : "mr-3 bg-gray-300"
          }`}
          src={isUser ? "/image/user.jpg" : "/image/interviewer.jpg"}
          alt={isUser ? "User" : "Interviewer"}
        />
        <div ref={isLast ? lastMessageRef : null} className="flex-1">
          <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
            <Message
              className={`${
                !isUser
                  ? "bg-gradient-to-br from-blue-600 to-blue-800 text-white border-none"
                  : "bg-gradient-to-br from-gray-800 to-gray-900 text-white border-none"
              }`}
              text={message.text}
            />
          </div>
          
          {message.code && (
            <div className={`mt-2 ${isUser ? "text-right" : "text-left"}`}>
              <pre className="bg-gray-200 dark:bg-gray-800 dark:text-gray-100 text-wrap p-3 rounded-lg inline-block max-w-full overflow-x-auto">
                {message.code}
              </pre>
            </div>
          )}

          {message.options && !message.answered && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`flex gap-2 flex-wrap mt-2 ${
                isUser ? "justify-end" : "justify-start"
              }`}
            >
              {message.options.map((option, optionIndex) => (
                <Button
                  variant="outline"
                  key={optionIndex}
                  className="px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => onOptionSelect?.(optionIndex)}
                >
                  {option}
                </Button>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
