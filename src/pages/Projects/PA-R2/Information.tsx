import * as React from "react";
import Typewriter from "typewriter-effect";

function Contentleft() {
  return (
    <>
      <div className="heading">
        <Typewriter
          options={{
            strings: ["Project PA-R2"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="data">
        <br />
        <h4>Details</h4>
        <ul>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </ul>

        <br />
        <h4>Launch Data</h4>
        <ul>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </ul>
      </div>
    </>
  );
}

export default Contentleft;
