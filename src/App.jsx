import React from "react";
import { UpdateFollower } from "react-mouse-follower";
import AnimatedBox from "./components/AnimatedBox";

export default function App() {
  return (
    <div className="overflow-x-hidden cursor-none">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 10,
          followSpeed: 1.5,
        }}
      >
        <AnimatedBox />
      </UpdateFollower>
    </div>
  );
}
