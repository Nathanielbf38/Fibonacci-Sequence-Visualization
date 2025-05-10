import { useState } from "react";
import "./App.css";
import Playground from "./Playground";
import Explanation from "./Explanation";

function App() {
  const [isExplanationWindow, setIsExplanationWindow] = useState(false);

  const explanationToggler = (value: any) => {
    setIsExplanationWindow(value);
  };

  return (
    <>
      <div className="fibonacci-sequence-playground-site-main-container absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]">
        <Playground toggler={explanationToggler} />
        {isExplanationWindow && <Explanation toggler={explanationToggler} />}
      </div>
    </>
  );
}

export default App;
