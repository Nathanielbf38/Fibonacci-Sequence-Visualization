import image from "../public/fibonacci-sequence.png";
import { MoveRight } from 'lucide-react';


const Explanation = (props: any) => {

  const playgroundFeatures = ["spawning up to three windows", "choosing from three graph types", "choosing from five various colors including an option of inserting custom colors.", "entering a desired n value to see the output in accordance with the sequence formula", "seeing the sequence expressed in row of numbers by toggling the view under the graphs"];

  const codeBlock =  `const fibonacciSequenceComputation = (n: number): any => {
  let fibSequenceArr = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibSequenceArr.push(fibSequenceArr[i - 1] + fibSequenceArr[i - 2]);
  }
  return fibSequenceArr;
};

export default fibonacciSequenceComputation;`; 

  return (
    <>
      <div className="fibonacci-sequence-playground-explanation-main-container  w-full font-inter bg-white fixed top-0 left-0 right-0 border-b border-b-gray-200 flex items-center flex-col shadow-2xl border-t border-gray-300 rounded-b-md overflow-hidden h-[90vh] overflow-y-scroll py-10 ">
        <div className="explanation-content-container w-[50%] px-6 py-10 flex flex-col gap-3">
          <div className="website-logo flex items-center">
          <img
                alt="fibonaaci-sequence-playground icon"
                src="public\icons8-math-100.png"
                className="w-[40px]"
              />
              <span className="text-xs font-semibold">Fibonacci Sequence Playground - Explanation</span>
          </div>
          <div className="explanation-heading font-medium mt-1">
            <h1 className="text-center font-bold text-2xl italic ">
              Fibonacci Sequence Overview and Explanation
            </h1>
          </div>
          <div className="explanation-body mt-5">
            <div className="explanation-subject-text mt-8 flex flex-col gap-4">
              <p className="text-sm ">
                The Fibonacci Sequence is a series of numbers where each number
                is the sum of the two preceding ones, typically starting with 0
                and 1. That is: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, …
              </p>
              <div className="explanation-subject-graphical-showcase w-full flex flex-col items-center">
              <img
                alt="fibonacci-sequence-playground explanation image"
                src={image}
                className=" rounded-sm border border-gray-200 w-full"
              />
              <div className="caption-section bg-gray-50 p-2 rounded-sm border border-gray-300 mt-2">
                <small className="text-xs font-medium ">
                  This is another visualization of the Fibonacci sequence, often observed in nature. Notice
                  that the each numbers of the sequence has their defined
                  position on the chart.
                </small>
              </div>
            </div>
              <h3 className="font-semibold mt-5">Overview...</h3>
              <p className="text-sm">
                Now, would it be great to see if this was drawed out on graphs and 
                other charts, to get the idea of what sequence looks?
              </p>
              <p className="text-sm">
                Well, this website is designed to give you, the user, 
                an experience of observing the sequence expressed in visualization 
                forms other than a boring, long length of number. 
              </p>
              <p className="text-sm">
                To start, simplying click on the plus sign element 
                and once you do so, you will be presented with three options from the 
                selection; line, scatter and bar. Click on the selection list to confirm
                your desire for the option. Once clicked, a graph or chart window would
                appears in the playground and to extend the customization, you can change
                any colors presented on the window by selecting color from the selection 
                positioned right to the plus sign element.
              </p>
              <p className="text-sm">And...enjoy! You now have a window, representing a 
                visualization of fibonacci sequence. However, playground offers more than
                 simply spawning a window displaying a sequence.
              </p>
              <p className="text-sm">
                You can explore the features offered by the playground such as;  
              </p>
              <ul className="features-displaying flex flex-col gap-2 text-xs ">
                {playgroundFeatures.map((feature) => {
                  return<li className="list-disc ml-4">{feature}</li>
                })}
              </ul>
              <h3 className="font-semibold mt-5">So, how does it work?</h3>
              <p className="text-sm">
                To make context of how website takes in number,
                 computes the sequence and reflects it on the graphs, you have to 
                 looks on the mathematics side.
              </p>
              <p className="text-sm">
                The fibonacci sequence has a formula and it looks like this -
              </p>
              <div className="formula-displayer bg-gray-50 border border-gray-300 p-2 rounded-sm ">
                <span className=" block text-lg font-jetbrains">F<small className="text-xs font-jetbrains">n</small> = F<small className="text-xs font-jetbrains">n-1</small>+F<small className="text-xs font-jetbrains">n-2</small></span>
                <span className=" block text-lg font-jetbrains">n<small className="text-xs font-jetbrains">0</small> = 0 & n<small className="text-xs font-jetbrains">1</small> = 1</span>
                <span className="block font-jetbrains text-lg">Where n = 1</span>
              </div>
              <p className="text-sm">
                Have looking at the formula, it can be made out clearly that you can render 
                a sequence by entering certain n value.
              </p>
              <p className="text-sm">
                Here's an example: What would a sequence looks like 
                if n of 12 is entered?
              </p>
              <p className="text-sm">
                As seen here, the n is 12 and sequence has to be rendered 
                based on that. Firstly, an array of sequence containing the result of n starting 
                from 1 has to be intitated. This is must for in order to make computation using
                formula possible.
              </p>
              <div className="example-sequence-displaying bg-gray-50 border border-gray-300 p-2 rounded-sm">
                <span className="text-sm font-jetbrains text-center">F = [0,1,1,2,3,5,8,13,21,34,55,89]</span>
              </div>
              <p className="text-sm">
                With the array representing number starting from one all the way 
                to eleven, the calculation on n 12 can be carried out. Refering 
                to the formula, the calculation would looks like this -
              </p>
              <div className="example-calculation-displaying bg-gray-50 border border-gray-300 p-2 rounded-sm">
                <span className="text-sm font-jetbrains text-center flex items-center">F<small className="text-xs text-medium">12</small> = F<small className="text-xs text-medium">[12-1]</small> + F<small className="text-xs text-medium">[12-2]</small> <MoveRight className="w-[14px] mx-3"/> 89 + 55</span>
                <span className="text-sm font-jetbrains text-center flex items-center">F<small className="text-xs ">12</small> = 144</span>
              </div>
              <p className="text-sm">And the result of 12 as n for input is 144.</p>
              <p className="text-sm">Now, move on to the programming side. The formula for the sequence 
                can be used as a blueprint and used as base algorithm for computations. It would looks like this -
              </p>
              <div className="example-algorithm-codebase-displaying bg-gray-50 border border-gray-300 p-2 rounded-sm">
                <span className="file-name-displayer text-xs font-inter font-medium p-2 rounded-sm bg-gray-100 border border-gray-300 mb-2 block">sequence-computation-algorithm.ts</span>
                <pre>
                  <code className="text-xs font-jetbrains">
                    {codeBlock}
                  </code>
                </pre>
              </div>
              <p className="text-sm">
                The structure of the snippet above can be made out and viewed similarly
                to the formula. You can execute the 
                <span className="font-jetbrains text-xs bg-gray-100 p-1 rounded-sm">fibonaaciSequenceComputation</span>
                function by calling <span className="font-jetbrains text-xs bg-gray-100 p-1 rounded-sm">fibonaaciSequenceComputation(12)</span>. This will return an array containing a sequence including 144
                as the last index.
              </p>
              <p className="text-sm">
                Everytime a window is spawned, the function is executed and return a result, which then will be reflected on the chart within the window.
              </p>
              <p className="text-sm">Now, you have reached the stage where you can able to understand how the sequence is created and how is it reflected in programming.</p>
              <small className="font-semibold">- The end</small>
            </div>
          </div>
        </div>
        <div className="window-modal-interface mt-6">
          <span
            onClick={() => {
              props.toggler(false);
            }}
            className="hover:underline text-xs hover:scale-105  duration-150 cursor-pointer block"
          >
            Close the window
          </span>
        </div>
      </div>
    </>
  );
};

export default Explanation;
