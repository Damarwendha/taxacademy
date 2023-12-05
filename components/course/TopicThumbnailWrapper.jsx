import Thumbnail from "../Thumbnail";
import TopicList from "./TopicList";

function TopicThumbnailWrapper() {
  return (
    <span className="relative self-center w-full">
      <TopicList
        topics={[
          { label: "UI UX Improvement", href: "#" },
          { label: "Figma", href: "#" },
          { label: "Design", href: "#" },
        ]}
      />
      <Thumbnail src="https://tse1.mm.bing.net/th?id=OVP.EV-XTbO_yVr-Ej6ThwTLpwEsDh&pid=Api&w=296&h=156&c=7&p=0" />
    </span>
  );
}

export default TopicThumbnailWrapper;
