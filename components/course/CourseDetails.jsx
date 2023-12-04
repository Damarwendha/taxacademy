import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

function CourseDetails() {
  return (
    <div className="sm:px-8">
      <Accordion>
        <AccordionPanel>
          <AccordionTitle className="font-bold text-gray-700">
            Description
          </AccordionTitle>
          <AccordionContent>
            <span className="text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              repudiandae ad vel quaerat impedit ipsam beatae! Vero iusto
              necessitatibus doloribus molestiae delectus. Cumque magnam ab aut,
              aperiam ullam esse quasi!
            </span>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>

      <Accordion>
        <AccordionPanel>
          <AccordionTitle className="font-bold text-gray-700">
            Requirements
          </AccordionTitle>
          <AccordionContent>
            <ul className="pl-5 text-gray-700 list-disc">
              <li>
                <p>Basic Prototypes</p>
              </li>
              <li>
                <p>Understand basic tools on Figma</p>
              </li>
              <li>
                <p>Having minimum one eye and ear</p>
              </li>
              <li>
                <p>Yeah that's it</p>
              </li>
            </ul>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  );
}

export default CourseDetails;
