import { Link } from "gatsby";
import * as React from "react";

function TimeWebsite() {
  return (
    <div className="timeline-row ">
      <div className="timeline-time">
        Date<small>Year</small>
      </div>
      <Link to="Projects/PA-R2/PA-R2">
        <div className="timeline-content raise">
          <h4>Future Project</h4>
          <p>Here will be a future Project soon...</p>
        </div>
      </Link>
    </div>
  );
}
export default TimeWebsite;
