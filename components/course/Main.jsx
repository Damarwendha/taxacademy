import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

function Main() {
  return (
    <Accordion>
      <AccordionPanel>
        <AccordionTitle>Description</AccordionTitle>
        <AccordionContent>
          <span className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            repudiandae ad vel quaerat impedit ipsam beatae! Vero iusto
            necessitatibus doloribus molestiae delectus. Cumque magnam ab aut,
            aperiam ullam esse quasi!
          </span>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel>
        <AccordionTitle>Requirements</AccordionTitle>
        <AccordionContent>
          <ul className="list-disc pl-5 text-gray-700">
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
  );
}

export default Main;
