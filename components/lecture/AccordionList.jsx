import AccordionItem from "./AccordionItem";

// lectureData = [
//   {
//     title: "string",
//     contentList: [
//       { title: "string", minutes: number | string },
//       { title: "string", minutes: number | string },
//     ],
//   }]

function AccordionList({ lectureData }) {
  return (
    <div className="border-gray-200 lg:h-screen border-x-2 lg:overflow-y-scroll">
      {lectureData.map((accordion, i) => {
        const totalMins = accordion.contentList.reduce(
          (acc, content) => {
            return Number(content.minutes) + Number(acc);
          },
          [0]
        );

        return (
          <AccordionItem
            title={accordion.title}
            totalMins={totalMins}
            accordionNum={i + 1}
            contentList={accordion.contentList}
          />
        );
      })}
    </div>
  );
}

export default AccordionList;
