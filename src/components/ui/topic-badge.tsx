import { Link } from "react-router-dom";

const TopicBadge = ({ topic }: { topic: string }) => (
    <Link to={`/concept?topic=${topic}`} className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700">
        {topic}
    </Link>
);

export default TopicBadge;