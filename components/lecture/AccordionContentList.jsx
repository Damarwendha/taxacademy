import AccordionContentItem from "./AccordionContentItem";

function AccordionContentList({ contentList }) {
  return (
    <ul>
      {contentList.map((content, i) => (
        <AccordionContentItem
          title={content.title}
          minutes={content.minutes}
          contentNum={i + 1}
          totalContent={contentList.length}
        />
      ))}
    </ul>
  );
}

export default AccordionContentList;
