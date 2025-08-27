import React from "react";
import { topicList } from "../../lib/utils";
import { Link } from "react-router-dom";

const TopicList = React.memo(() => {
  return (
    <div className="flex gap-2 justify-start items-center py-2 overflow-x-scroll">
      {topicList?.map((topic) => (
        <Link
          to={`/concept?topic=${topic}`}
          className="bg-blue-300 cursor-pointer text-nowrap text-blue-600 px-3 py-1 rounded-md hover:bg-blue-700 hover:text-white"
        >
          {topic.charAt(0).toUpperCase() + topic.slice(1).split("-").join(" ")}
        </Link>
      ))}
    </div>
  );
});

export default TopicList;