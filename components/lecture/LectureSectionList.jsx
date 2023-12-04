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

function LectureSectionList({ sectionData }) {
  return sectionData.map((section, i) => {
    const totalMins = section.items.reduce(
      (acc, item) => {
        return Number(item.minutes) + Number(acc);
      },
      [0]
    );

    return (
      <Accordion alwaysOpen collapseAll key={i}>
        <Accordion.Panel>
          <Accordion.Title as="div">
            <h3 className="leading-5 title-md">
              Section {i + 1}: {section.heading}
            </h3>
            <span className="text-xs text-black">
              0 / {section.items.length} | {toHoursAndMinutes(totalMins)}
            </span>
          </Accordion.Title>
          <Accordion.Content className="p-0 text-sm">
            <ul>
              {section.items.map((item, i) => (
                <li
                  className={`flex gap-3 px-4 py-2 hover:bg-purple-200 ${
                    i === 0
                      ? "pt-4"
                      : i === section.items.length - 1
                      ? "pb-4"
                      : ""
                  }`}
                  key={i}
                >
                  <MdOutlineCheckBoxOutlineBlank className="min-w-[20px] min-h-[20px] " />
                  <span>
                    <p className="mb-2 text-start">
                      {i + 1}. {item.title}
                    </p>
                    <span className="gap-1 row">
                      <MdOutlineOndemandVideo color="gray" />
                      <p className="text-xs text-gray-600 ">
                        {toHoursAndMinutes(item.minutes)}
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

export default LectureSectionList;
