import "./App.css";
import { accordionData } from "./constant";
import AccordionFrame from "./AccordionFrame";
import caret from "./assets/caret-down.svg";
import { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  // const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="border-rounded font-mono shadow-custom-blue rounded-2xl flex items-center flex-col">
      <div
        onClick={handleClick}
        className={`w-full select-none cursor-pointer flex gap-[24px] justify-center py-8 ${
          isOpen && "border-b-[1px] border-dashed border-gray-800"
        }`}
      >
        <h1 className="text-[32px]">Container</h1>
        <img className={isOpen && "rotate-180"} src={caret} />
      </div>
      {isOpen && (
        <div className="flex flex-col gap-3 w-[500px] mb-24 mt-[48px] ">
          {accordionData.map((item, index) => (
            <AccordionFrame key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
