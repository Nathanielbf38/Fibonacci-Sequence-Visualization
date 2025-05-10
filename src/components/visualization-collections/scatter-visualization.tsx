import { useState, useEffect } from "react";
import fibonacciSequenceComputation from "../../sequence-computation-algorithm";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import { X } from "lucide-react";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const Scatter_visualization = (props: any) => {
  const [nInt, setNInt] = useState<any>(6);
  const [sequence, setSequence] = useState<any>([]);
  const [sequenceDisplayed, setSequenceDisplayed] = useState(false);

  useEffect(() => {
    let result = fibonacciSequenceComputation(nInt);

    if (result.length >= 1) {
      setSequence(result);
    }
  }, [nInt]);

  let modifiedSequence = [];

  for (let i = 0; i <= sequence.length - 1; i++) {
    modifiedSequence.push({
      x: i,
      y: sequence[i],
    });
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    datasets: [
      {
        label: "Fibonacci Sequence - Scatter Plot",
        data: modifiedSequence,
        backgroundColor: props.color,
      },
    ],
  };

  return (
    <>
      <div className="playground-intance w-[32.5%]  p-2 rounded-sm border border-gray-300 cursor-pointer hover:border-black duration-150">
        <div className="playground-instance-control-interface my-1 flex items-center justify-between">
          <div className="input-field flex items-center gap-2">
            <label className="text-xs font-inter font-medium">
              Number of n:
            </label>
            <input
              value={nInt}
              onChange={(e) => {
                setNInt(e.target.value);
              }}
              className="p-1 font-satoshi border border-gray-300 text-xs rounded-sm"
            ></input>
          </div>
          <div className="instance-deletion-element bg-gray-100 rounded-full w-fit p-1 cursor-pointer">
            <X className="w-[15px] h-[15px] hover:rotate-45 duration-150" />
          </div>
        </div>
        <div className="playground-instance-visualization-subject">
          <Scatter className="w-3/4" options={options} data={data} />
        </div>
        <div className="instance-sequence-displayer mt-3">
          <span
            onClick={() => {
              if (!sequenceDisplayed) {
                setSequenceDisplayed(!sequenceDisplayed);
              }
              if (sequenceDisplayed) {
                setSequenceDisplayed(!sequenceDisplayed);
              }
            }}
            className="text-xs font-inter font-medium hover:underline"
          >
            {sequenceDisplayed ? "Hide" : "Show"} the sequence
          </span>

          {sequenceDisplayed && (
            <div className="sequence-displayed flex gap-3 flex-wrap p-2 rounded bg-gray-50 border border-gray-200 mt-1">
              {sequence.map((item: any) => {
                return <small className="font-jetbrains text-xs">{item}</small>;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Scatter_visualization;
