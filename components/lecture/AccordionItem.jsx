import { Accordion } from "flowbite-react";
import { toHoursAndMinutes } from "@/utils/helper";
import AccordionContentList from "./AccordionContentList";

function AccordionItem({ totalMins, sectionNum, title, contentList }) {
  return (
    <Accordion alwaysOpen collapseAll key={sectionNum} className="border-x-0">
      <Accordion.Panel>
        <Accordion.Title as="div">
          <h3 className="leading-5 title-md">
            Section {sectionNum}: {title}
          </h3>
          <span className="text-xs text-black">
            0 / {contentList.length} | {toHoursAndMinutes(totalMins)}
          </span>
        </Accordion.Title>
        <Accordion.Content className="p-0 text-sm">
          <AccordionContentList contentList={contentList} />
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}

export default AccordionItem;
