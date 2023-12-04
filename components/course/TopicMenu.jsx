import Link from "@/components/Link";

// * - we expect topics to be = [
//                               { label: "string", href: "#" },
//                               { label: "string", href: "#" },
//                               { label: "string", href: "#" },
//                              ]
// * - For better appearence in the user interface,
//     please ensure that the combined length of all labels does not exceed 28 words.

function TopicMenu({ topics }) {
  return (
    <div className="max-w-full mx-2 mb-2 text-center break-words sm:-top-8 sm:left-2 sm:absolute">
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

export default TopicMenu;
