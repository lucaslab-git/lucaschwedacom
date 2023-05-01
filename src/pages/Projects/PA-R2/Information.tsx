import * as React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "gatsby";

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
          <li>Build time: 200 Std.</li>
          <li>Print time: 98 Std.</li>
          <li>Price: 60€</li>
          <li>Engine: Klima D9-5</li>
          <li>Height: 78 cm</li>
        </ul>

        <br />
        <h4>Launch Data</h4>
        <ul>
          <li>Filght height: 200 m</li>
          <li>Flight time: 15 s</li>
          <li>Search time: 10 Std.</li>
          <li>Flight distance: 1 km</li>
        </ul>
        <br></br>
        <h4>Other Projects</h4>
        <ul>
          <li>
            <Link className="projects" to="../../../">
              Home{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
              </svg>
            </Link>
          </li>
          <ul>
            <li>
              <Link className="projects" to="../../Holerush/Holerush">
                Holerush{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
                </svg>
              </Link>
            </li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
          </ul>
        </ul>
      </div>
    </>
  );
}

export default Contentleft;
