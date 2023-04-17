import { Link } from "gatsby";
import * as React from "react";
import Impressum from "./DSVGO/Impressum";

function TimeWebsite() {
  return (
    <div className="timeline-row ">
      <div className="timeline-time">
        Apr 17<small>2023</small>
      </div>
      <Link to="DSVGO/Impressum">
        <div className="timeline-content raise">
          <h4>Website</h4>
          <p>
            A Portfolio Website based on Gatsby react and hosted by Ionos Deplow
            Now
          </p>
        </div>
      </Link>
    </div>
  );
}
export default TimeWebsite;
