import * as React from "react";
import Element from "./Time-Website";
import { Link } from "gatsby";

function timeline() {
  return (
    <>
      <div className="container ">
        <div className="timeline">
          <div className="timeline-row ">
            <div className="timeline-time">
              Sep 24<small>2022</small>
            </div>
            <Link rel="icon" to="Projects/PA-R2/PA-R2">
              <div className="timeline-content raise">
                <h4>PA-R2</h4>
                <p>
                  My Secound Rocket{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
                  </svg>
                </p>
              </div>
            </Link>
          </div>
          <div className="timeline-row ">
            <div className="timeline-time">
              May 12<small>2020</small>
            </div>
            <Link rel="icon" to="Projects/Holerush/Holerush">
              <div className="timeline-content raise">
                <h4>Hole.rush</h4>
                <p>
                  My Smartphone Game{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
                  </svg>
                </p>
              </div>
            </Link>
          </div>
          <Element />
          <Element />
          <Element />
          <Element />
        </div>
      </div>
    </>
  );
}

export default timeline;
