import Link from "@/components/Link";

function TopicList({ topics }) {
  return (
    <div className="hidden max-w-full mx-2 mb-2 text-center break-words sm:inline sm:mx-0 sm:-top-8 sm:left-0 left-4 sm:absolute">
      {topics.map((topic, i) => {
        if (i === topics.length - 1) {
          return (
            <span key={i}>
              <Link href={topic.href}>{topic.label}</Link>
            </span>
          );
        } else {
          return (
            <span key={i}>
              <Link href={topic.href}>{topic.label}</Link>
              <span className="mx-2 text-blue-800">&gt;</span>
            </span>
          );
        }
      })}
    </div>
  );
}

export default TopicList;
