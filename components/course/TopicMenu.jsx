import Link from "@/components/Link";

function TopicMenu({ topics }) {
  return (
    <div className="max-w-full mb-2 break-words sm:-top-8 sm:left-2 sm:absolute">
      {topics.map((topic, i) => {
        if (i === topics.length - 1) {
          return (
            <Link href={topic.href} key={i}>
              {topic.label}
            </Link>
          );
        } else {
          return (
            <>
              <Link href={topic.href} key={i}>
                {topic.label}
              </Link>
              <span className="mx-2 text-blue-800">&gt;</span>
            </>
          );
        }
      })}
    </div>
  );
}

export default TopicMenu;
