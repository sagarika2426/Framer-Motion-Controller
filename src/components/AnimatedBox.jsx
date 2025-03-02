import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { generatcode } from "../utils/utils";
import Highlight from "react-highlight";
import "highlight.js/styles/github.css";
// import hljs from "highlight.js/lib/core";
// import javascript from "highlight.js/lib/languages/javascript";

// hljs.registerLanguage("javascript", javascript);

const MotionController = () => {
  const [formParams, setFormParams] = useState({
    opacity: 1,
    scale: 1,
    rotate: 0,
    duration: 0.5,
    width: 250,
    height: 250,
    backgroundColor: "#08b6a3",
  });
  const [savedParams, setSavedParams] = useState(formParams);
  const [isClicked, setIsClicked] = useState(false);
  const [generatedCode, setGeneratedCode] = useState(
    generatcode({ savedParams })
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormParams({
      ...formParams,
      [name]: name === "backgroundColor" ? value : parseFloat(value || 0),
    });
  };

  const timeoutRef = useRef(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setSavedParams(formParams);
      setGeneratedCode(generatcode({ savedParams: formParams }));
    }, 1000);
  }, [formParams]);

  // const handleSave = () => {
  //   setGeneratedCode(generatcode({ savedParams: formParams }));
  //   // console.log("generatcodeData", generatcodeData)
  // };

  return (
<>
<h1 className="text-3xl font-bold text-center text-white py-4 bg-gray-950">
Framer Motion Controller
  </h1>
<div className="flex flex-col md:flex-row h-screen bg-gray-900 text-white p-4 gap-6">
  {/* Motion Controls */}
  <div className="w-1/2 flex justify-center">
    <div className="bg-gray-800 p-4 rounded-lg shadow-md w-full">
      <h2 className="text-xl font-semibold text-center mb-4">Motion Controls</h2>
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Opacity", name: "opacity", min: 0, max: 1, step: 0.1 },
          { label: "Scale", name: "scale", min: 0.5, max: 2, step: 0.1 },
          { label: "Rotate (°)", name: "rotate", min: -180, max: 180, step: 5 },
          { label: "Duration (s)", name: "duration", min: 0.1, max: 2, step: 0.1 },
          { label: "Width (px)", name: "width", min: 50, max: 300, step: 10 },
          { label: "Height (px)", name: "height", min: 50, max: 300, step: 10 },
        ].map((input) => (
          <div key={input.name}>
            <label className="block mb-1">{input.label}</label>
            <input
              type="number"
              name={input.name}
              min={input.min}
              max={input.max}
              step={input.step}
              value={formParams[input.name]}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-white rounded-md"
            />
          </div>
        ))}
      </div>
      <label className="block mt-4 mb-1">Background Color</label>
      <input
        type="color"
        name="backgroundColor"
        value={formParams.backgroundColor}
        onChange={handleChange}
        className="w-full h-10 bg-gray-700 text-white rounded-md"
      />
      {/* <button
        onClick={handleSave}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full"
      >
        Generate Code
      </button> */}
       {/* Code Box */}
    <div className="w-full bg-black p-2 rounded-lg shadow-md h-72 overflow-auto relative mt-5">
      <h3 className="text-lg font-semibold mb-2">Code</h3>
      <Highlight className="javascript">{generatedCode}</Highlight>
      <button
        className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-md text-sm"
        onClick={() => navigator.clipboard.writeText(generatedCode)}
      >
        Copy Code
      </button>
    </div>
    </div>
  </div>

  {/* Motion Box & Generated Code */}
  <div className="w-2/3 flex flex-col items-center gap-4 justify-around">
    <motion.div
      initial={{ opacity: 1, scale: 1, rotate: 0 }}
      animate={
        isClicked
          ? {
              opacity: savedParams.opacity,
              scale: savedParams.scale,
              rotate: savedParams.rotate ?? 0,
              width: savedParams.width,
              height: savedParams.height,
              transition: { duration: savedParams.duration },
            }
          : {}
      }
      whileHover={{ scale: 1.2 }}
      className="rounded-xl cursor-pointer"
      style={{
        width: savedParams.width,
        height: savedParams.height,
        backgroundColor: savedParams.backgroundColor,
      }}
      onClick={() => setIsClicked(!isClicked)}
    />

   
  </div>
</div>

</>
  );
};

export default MotionController;
