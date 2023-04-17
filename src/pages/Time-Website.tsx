import * as React from "react";

function TimeWebsite() {
  return (
    <div className="timeline-row ">
      <div className="timeline-time">
        Apr 17<small>2023</small>
      </div>
      <a href="./AboutMe">
        <div className="timeline-content raise">
          <h4>Website</h4>
          <p>
            A Portfolio Website based on Gatsby react and hosted by Ionos Deplow
            Now
          </p>
        </div>
      </a>
    </div>
  );
}
export default TimeWebsite;
