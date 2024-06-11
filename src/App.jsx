import "./App.css";
import { accordionData } from "./constant";
import AccordionFrame from "./AccordionFrame";
import caret from "./assets/caret-down.svg";
import { useEffect, useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => setIsOpen(!isOpen);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const bodyElement = document.body;

    if (isDarkTheme) {
      bodyElement.classList.add("dark");
      bodyElement.classList.remove("light");
    } else {
      bodyElement.classList.add("light");
      bodyElement.classList.remove("dark");
    }
  }, [isDarkTheme]);

  return (
    <>
      <button
        type="button"
        className="mb-20 rounded-full bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => setIsDarkTheme(!isDarkTheme)}
      >
        {isDarkTheme ? "Light  🌔" : "Dark  🌘"}
      </button>
      <div className="border-rounded flex flex-col items-center rounded-2xl border font-mono shadow-md dark:border-0 dark:shadow-custom-blue">
        <div
          onClick={handleClick}
          className={`flex w-full cursor-pointer select-none justify-center gap-[24px] py-8 ${
            isOpen && "border-b-[1px] border-dashed dark:border-slate-300/25"
          }`}
        >
          <h1 className="text-[32px]">Container</h1>
          <img className={`${isOpen && "rotate-180"}`} src={caret} />
        </div>
        {isOpen && (
          <div className="mb-24 mt-[48px] flex w-[500px] flex-col gap-3">
            {accordionData.map((item, index) => (
              <AccordionFrame
                key={index}
                item={item}
                showItem={index === activeIndex ? true : false}
                setActiveIndex={() => {
                  setActiveIndex(activeIndex === index ? null : index);
                }}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Accordion;
