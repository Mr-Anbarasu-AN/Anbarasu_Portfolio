import React from "react";
import Typewriter from "typewriter-effect";
import "./Type.css"

function Type() {
  return (
    <>
    <h2 className="type" >
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Cloud Engineer",
          "Full Stack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </h2>
    </>
  );
}

export default Type;