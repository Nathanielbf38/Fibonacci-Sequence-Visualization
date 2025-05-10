import { useState } from "react";
import Line_visualization from "./components/visualization-collections/line-visualization";
import Scatter_visualization from "./components/visualization-collections/scatter-visualization";
import Bar_visualization from "./components/visualization-collections/bar-visualization";
import { Plus } from "lucide-react";
import ColorSelector from "./components/playground-instance-color-selector";

const Playground = (props: any) => {
  const [spawnerExpanding, setSpawnerExpanding] = useState(false);
  const [instanceGroup, setInstanceGroup] = useState<any>([]);
  const [selectedInstanceColor, setSelectedInstanceColor] = useState<any>("#000000");

  const VisualizationMode = (props: any) => {
    switch (props.mode) {
      case "line":
        return <Line_visualization color={selectedInstanceColor} />;
      case "scatter":
        return <Scatter_visualization color={selectedInstanceColor} />;
      case "bar":
        return <Bar_visualization color={selectedInstanceColor} />;
    }
  };

  const InstanceTypeSelector = () => {
    const [selectedInstanceType, setSelectedInstanceType] = useState("none");

    const modeItems = [
      {
        mode: "none",
        description: "",
      },
      {
        mode: "line",
        description: "This visualization uses lines to reflect the data",
      },
      {
        mode: "scatter",
        description: "This visualization uses scatter plot to reflect the data",
      },
      {
        mode: "bar",
        description: "This visualization uses bar to reflect the data",
      },
    ];

    return (
      <div className="toggled-expanding-interface duration-150 font-inter w-[100px] relative bg-gray-100 border border-gray-200 rounded-sm font-medium">
        <div className="instance-type-selector">
          <div className="focused-section">
            <div className="selected-instance-indicato r">
              <small className="text-xs p-2">{selectedInstanceType}</small>
            </div>
          </div>
          <div className="hover-section absolute top-[40px] w-full bg-gray-50 p-2 rounded-sm shadow-2xl border border-gray-300">
            <div className="selector-choice-list flex flex-col gap-2">
              {modeItems &&
                modeItems.map((instanceType) => {
                  return (
                    <span
                      onClick={() => {
                        if (instanceGroup.length < 3) {
                          setInstanceGroup([
                            ...instanceGroup,
                            instanceType.mode,
                          ]);
                          setSelectedInstanceType(instanceType.mode);
                        }
                      }}
                      className="text-xs font-medium py-1 px-2 hover:bg-gray-100 duration-150 cursor-pointer border border-transparent hover:border-gray-300 rounded-sm flex items-center justify-between"
                    >
                      {instanceType.mode}
                    </span>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const instanceColorHandler = (color: any) => {
    setSelectedInstanceColor(color);
  };

  return (
    <>
      <div className="fibonacci-sequence-playground-container p-3 rounded-[8px] bg-white fixed top-0 bottom-0 left-0 right-0 m-10 border border-gray-300 shadow-md">
        <div className="top-section ">
          <div className="heading-subsection flex justify-between">
            <div className="site-logo flex items-center gap-1 py-1 px-1 bg-gray-50 border border-gray-200 rounded-sm">
              <img
                alt="fibonaaci-sequence-playground icon"
                src="public\icons8-math-100.png"
                className="w-[40px]"
              />
              <h1 className="font-inter font-bold m-0 mr-1">
                Fibonacci Sequence Playground
              </h1>
            </div>
            <div className="fibonacci-sequence-explanation-window-toggler-element">
              <button
                onClick={() => {
                  props.toggler(true);
                }}
                className="explanation-window-toggle-btn text-xs font-inter font-medium py-2 px-3 rounded-sm bg-black border text-white cursor-pointer hover:bg-transparent hover:text-black duration-150"
              >
                See the explanation behind this
              </button>
            </div>
          </div>
          <div className="introdution-element mt-5 p-2 rounded-sm font-inter">
            <div className="introduction-statement">
              <h3 className="mb-2 text-center font-medium">
                Welcome to the Fibonacci Sequence Playground!
              </h3>
              <span className=" text-xs font-medium block text-center">
                In this playground, you can enter the length and get a glance of
                what the visualization of the fibonacci sequence looks like by
                using various graphs and charts.
              </span>
            </div>
          </div>
        </div>
        <div className="body-section border-t mt-4 border-t-gray-200">
          <div className="playground-control-interface-element flex justify-between mt-3">
            <div className="total-playground-instance-displaying-element p-2 bg-gray-50 rounded-sm">
              <small className="font-inter text-xs font-medium">
                Playground instance created: {instanceGroup.length}/3
              </small>
            </div>
            <div className="instance-interface flex items-center gap-3">
              <div className="playground-instance-adding-element relative flex items-center gap-2 bg-gray-50 border border-gray-300 py-1 px-2 rounded-sm duration-150 cursor-pointer">
                <Plus
                  onClick={() => {
                    if (spawnerExpanding) {
                      setSpawnerExpanding(!spawnerExpanding);
                    }
                    if (!spawnerExpanding) {
                      setSpawnerExpanding(!spawnerExpanding);
                    }
                  }}
                  className="w-[16px] h-[16px] block"
                />
                {spawnerExpanding && <InstanceTypeSelector />}
              </div>
              <ColorSelector importedFunction={instanceColorHandler} />
            </div>
          </div>
          <div
            className={`playground-instance-gallery mt-8 flex flex-wrap gap-4 items-start  ${instanceGroup.length >= 3 && "justify-evenly"}`}
          >
            {instanceGroup.map((instance: any) => {
              return (
                <>
                  <VisualizationMode mode={instance} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Playground;
