import { useMemo } from "react";
import { topicList } from "../../lib/utils";
import { Link, useLocation } from "react-router-dom";

const TopicList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activeTopic = searchParams.get('topic');

  // Memoize the topic list items to prevent re-renders
  const topicItems = useMemo(() => {
    return topicList?.map((topic) => ({
      id: topic,
      displayName: topic.charAt(0).toUpperCase() + topic.slice(1).split("-").join(" "),
      path: topic
    }));
  }, []);

  return (
    <div className="flex gap-2 justify-start items-center p-6 overflow-x-scroll px-2">
      {topicItems?.map((item) => {
        const isActive = activeTopic === item.path;
        return (
          <Link
            key={item.id}
            to={`/concept?topic=${item.path}`}
            className={`text-nowrap px-3 py-1 rounded-md transition-colors ${
              isActive 
                ? 'bg-blue-600 text-white' 
                : 'bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-gray-800 dark:text-blue-300 dark:hover:bg-gray-700'
            }`}
          >
            {item.displayName}
          </Link>
        );
      })}
    </div>
  );
}

export default TopicList;