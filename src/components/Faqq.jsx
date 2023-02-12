import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Faqq() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment >
      <div className="px-3 py-5">
      <h3 className="text-[36px] text-[#006774] font-bold">General Question</h3>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} className=""/>}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className=" text-left py-3 gap-3"
          >
            What is Bezi ?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className=" text-left gap-4 py-3"
          >
            What resources are provided by Bezi ?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className=" text-left gap-4 py-3"
          >
            Who is eligible for the Bezi Fellowship program?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className=" text-left gap-4 py-3"
          >
            When is the next Bezi Fellowship program?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(5)}
            className=" text-left gap-4 py-3"
          >
            What industries does the fellowship program focus on?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(6)}
            className=" text-left gap-4 py-3"
          >
            Are there any specific countries that the fellowship program focuses
            on?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(7)}
            className=" text-left gap-4 py-3"
          >
            How can I become a mentor for the program?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
      </div>
    </Fragment>
  );
}
