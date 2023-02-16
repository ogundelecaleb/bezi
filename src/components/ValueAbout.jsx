import React from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { linkedin } from "../assets";

function Icon({ id, open }) {
  return (
    <img src={linkedin} alt="" />
  );
}

const ValueAbout = () => {
    const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className=" bg-aboutUs bg-[#006774] relative   bg-center bg-cover bg-no-repeat pb-[120px]">
      <div className="md:px-[108px] px-4  m-auto">
        <div className="flex  justify-between items-center">
          <div>Learning Resources</div>
          <div>
            Bezi differentiates itself from other traditional accelerator
            platforms by centralizing the core needs of Founders:
          </div>
        </div>
        <div className="text-white max-w-[600px] ">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} className=""/>}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className=" text-left py-3 gap-3"
          >
             Mentorships
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
            Community forum
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
            Funding
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
            Networking
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
            Special discounts and offers
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
      </div>
    </div>
  );
};

export default ValueAbout;
