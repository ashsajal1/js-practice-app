import { HTMLAttributes } from "react";

interface TopicBadgeProps extends HTMLAttributes<HTMLDivElement> {
    topic: string
}
const TopicBadge = ({ topic, ...props }: TopicBadgeProps) => (
    <div {...props} className="bg-blue-300 cursor-pointer text-blue-600 px-3 py-1 rounded-md hover:bg-blue-700 hover:text-white">
        {topic.charAt(0).toUpperCase() + topic.slice(1)}
    </div>
);

export default TopicBadge;