import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const ColorSelector = (props: any) => {
  const [selectedColor, setSelectedColor] = useState<any>({
    code: "#000000",
    name: "Default",
  });

  const [isSelection, setIsSelection] = useState(false);

  const playgroundInstanceColor = [
    {
      code: "#000000",
      name: "Default",
    },
    {
      code: "#2b2d42",
      name: "Midnight Steel",
    },
    {
      code: "#8D99AE",
      name: "Cool Ash",
    },
    {
      code: "#EDF2F4",
      name: "Icy Fog",
    },
    {
      code: "#EF233C",
      name: "Crimson Flame",
    },
    {
      code: "#D90429",
      name: "Blood Rush",
    },
  ];

  return (
    <>
      <div className="instance-color-selector-element relative font-inter w-[180px]">
        <div
          onClick={() => {
            if (!isSelection) {
              setIsSelection(true);
            }
            if (isSelection) {
              setIsSelection(false);
            }
          }}
          className="focused-section bg-gray-50 border border-gray-300 py-1 px-2 rounded-sm flex items-center justify-between gap-3 cursor-pointer"
        >
          <div className="selected-color-indication flex items-center gap-2">
            <span className="text-xs font-medium">{selectedColor.name}</span>
            <div
              className={`respective-color-bubble w-[8px] h-[8px] bg-[${selectedColor.code}]`}
            ></div>
          </div>
          {isSelection ? (
            <ChevronUp className="w-[14px] duration-150" />
          ) : (
            <ChevronDown className="w-[14px] duration-150" />
          )}
        </div>
        {isSelection ? (
          <div className="hover-section absolute top-[50px] w-full bg-gray-50 p-2 rounded-sm shadow-2xl border border-gray-300">
            <div className="selector-option-list flex flex-col gap-2 ">
              {playgroundInstanceColor &&
                playgroundInstanceColor.map((color_item, index) => {
                  return (
                    <>
                      <small
                        key={index}
                        className="text-xs font-medium py-2 px-1 hover:bg-gray-100 duration-150 cursor-pointer border border-transparent hover:border-gray-300 rounded-sm flex items-center justify-between"
                        onClick={() => {
                          setSelectedColor({
                            name: color_item.name,
                            code: color_item.code,
                          });
                          props.importedFunction(color_item.code);
                        }}
                      >
                        {color_item.name}{" "}
                        <div
                          className={`respective-color-bubble w-[8px] h-[8px] bg-[${color_item.code}] rounded-full`}
                        ></div>
                      </small>
                    </>
                  );
                })}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default ColorSelector;
