import * as React from "react";
import Typewriter from "typewriter-effect";

function Contentleft() {
  return (
    <>
      <div className="heading">
        <p>Project</p>
        <Typewriter
          options={{
            strings: ["PA-R2"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </>
  );
}

export default Contentleft;
