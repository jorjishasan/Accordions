/* eslint-disable react/prop-types */
import aeroDown from "./assets/aero_down.svg";

const AccordionFrame = ({
  item: { heading, content },
  showItem,
  setActiveIndex,
}) => {
  console.log("Micro header rendered !");
  return (
    <div className="rounded-md border-[1px] border-blue-600/[.44]">
      <div
        className={`flex cursor-pointer select-none items-center gap-[48px] px-[36px] py-4 text-xl ${
          showItem && "border-b border-inherit"
        }`}
        onClick={setActiveIndex}
      >
        {
          <img
            className={`${showItem && "rotate-180"}`}
            src={aeroDown}
            alt="Aero Down"
          />
        }
        <h2 className="font-medium">{heading}</h2>
      </div>
      {showItem && (
        <p className="px-[36px] py-4 text-left opacity-70">{content}</p>
      )}
    </div>
  );
};

export default AccordionFrame;
