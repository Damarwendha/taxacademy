import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

function CourseDescription() {
  return (
    <Accordion className="sm:w-1/2 sm:h-fit">
      <AccordionPanel>
        <AccordionTitle className="font-bold text-gray-700 xl:text-lg">
          Description
        </AccordionTitle>
        <AccordionContent>
          <p className="text-gray-900 xl:text-lg ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            repudiandae ad vel quaerat impedit ipsam beatae! Vero iusto
            necessitatibus doloribus molestiae delectus. Cumque magnam ab aut,
            aperiam ullam esse quasi!
          </p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  );
}

export default CourseDescription;
