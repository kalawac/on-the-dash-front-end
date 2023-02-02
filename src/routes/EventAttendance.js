import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./EventAttendance.css";

import { groupData } from "../components/DummyData";

const EventAttendance = () => {
  // create clean-looking three column layout (flexR, 3 divs, no wrap)
  // first column ports in participants associated with the event ID
  // second column has radio buttons for attendance (yes/no)
  // third column has radio buttons for completed (yes/no)
  // submit button at top-right? -- cancel (takes you back to item) / save (submits form)
  // save data to cache --> optional reach; not for right now

  const { itemId } = useParams();
  const navigate = useNavigate();

  const thisData = groupData.events?.[itemId];

  if (!thisData) {
    navigate("/404");
  }

  const participants = thisData.participants;

  return (
    <div id="ea">
      <section id="eaContent" className="flexC">
        <div id="participants" className="dataCol"></div>
        <div id="attendance" className="inputCol"></div>
        <div id="completion" className="inputCol"></div>
      </section>
      <section id="dmEa" className="flexC">
        <div id="dm3" className="flexC">
          <Link to={".."}>
            <button title="Close form">
              <span className="fa-solid fa-classic fa-xmark">
                <FontAwesomeIcon icon={solid("xmark")} />
              </span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EventAttendance;
