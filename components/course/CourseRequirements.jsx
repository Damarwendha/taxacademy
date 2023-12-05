import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

function CourseRequirements() {
  return (
    <Accordion className="sm:w-1/2 sm:h-fit">
      <AccordionPanel>
        <AccordionTitle className="font-bold text-gray-700 xl:text-lg">
          Requirements
        </AccordionTitle>
        <AccordionContent>
          <ul className="pl-5 text-gray-900 list-disc xl:text-lg">
            <li>
              <p>Lorem ipsum dolor sit amet</p>
            </li>
            <li>
              <p>Lorem ipsum dolor sit amet</p>
            </li>
            <li>
              <p>Lorem ipsum dolor sit amet</p>
            </li>
            <li>
              <p>Lorem ipsum dolor sit amet</p>
            </li>
          </ul>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  );
}

export default CourseRequirements;
