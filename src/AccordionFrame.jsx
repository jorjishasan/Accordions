import { useState } from "react";
import aeroDown from "./assets/aero_down.svg";

// eslint-disable-next-line react/prop-types
const AccordionFrame = ({ item: { heading, content } }) => {
  const [showItem, setShowItem] = useState(false);
  const handleClick = () => setShowItem(!showItem);
  return (
    <div className="border-[1px] rounded-md border-blue-600/[.44] ">
      <div
        className={`flex px-[36px] py-4 gap-[48px] items-center text-xl select-none cursor-pointer ${
          showItem && "border-b border-inherit"
        }`}
        onClick={handleClick}
      >
        {
          <img
            className={showItem && "rotate-180"}
            src={aeroDown}
            alt="Aero Down"
          />
        }
        <h2 className="font-medium">{heading}</h2>
      </div>
      {showItem && (
        <p className="px-[36px] py-4 text-left transition-all ease-in duration-500 opacity-70">
          {content}
        </p>
      )}
    </div>
  );
};

export default AccordionFrame;
