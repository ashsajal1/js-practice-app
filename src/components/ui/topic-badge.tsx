import { Link } from "react-router-dom";

const TopicBadge = ({ topic }: { topic: string }) => (
    <Link to={`/concept?topic=${topic}`} className="bg-blue-300 text-blue-600 px-3 py-1 rounded-md hover:bg-blue-700 hover:text-white">
        {topic.charAt(0).toUpperCase() + topic.slice(1)}
    </Link>
);

export default TopicBadge;