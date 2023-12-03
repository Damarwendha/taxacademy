"use client";

import { toHoursAndMinutes } from "@/utils/helper";
import { Accordion } from "flowbite-react";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineOndemandVideo,
} from "react-icons/md";

// sectionData = [
//   {
//     heading: "Course Content",
//     items: [
//       { title: "Welcome", minutes: 120 },
//       { title: "lorem ipsum", minutes: 120 },
//     ],
//   }]

function CourseSectionList({ sectionData }) {
  return sectionData.map((section, i) => {
    const totalMins = section.items.reduce(
      (acc, item) => {
        return Number(item.minutes) + Number(acc);
      },
      [0]
    );

    return (
      <Accordion alwaysOpen key={i}>
        <Accordion.Panel>
          <Accordion.Title as="div">
            <h3 className="title-md">
              Section {i + 1}: {section.heading}
            </h3>
            <span className="text-xs text-black">
              0 / {section.items.length} | {toHoursAndMinutes(totalMins)}
            </span>
          </Accordion.Title>
          <Accordion.Content className="text-sm">
            <ul className="flex flex-col gap-4">
              {section.items.map((item, i) => (
                <li className="flex gap-3" key={i}>
                  <MdOutlineCheckBoxOutlineBlank size={20} />
                  <span>
                    <p className="mb-2 text-start">
                      {i + 1}. {item.title}
                    </p>
                    <span className="gap-1 row">
                      <MdOutlineOndemandVideo color="gray" />
                      <p className="text-xs font-normal text-gray-600">
                        {item.minutes}min
                      </p>
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    );
  });
}

export default CourseSectionList;
