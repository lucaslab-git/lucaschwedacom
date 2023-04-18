import Typewriter from "typewriter-effect";
import * as React from "react";

function Name() {
  return (
    <>
      <div className="aboutme">
        Hi, ich bin Luca Schweda
        <div className="typwrt">
          <Typewriter
            options={{
              strings: ["Entwickler", "Coder"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Name;
