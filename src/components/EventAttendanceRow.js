import React from "react";
import EACheckbox from "../components/EACheckbox";

import "./EventAttendanceRow.css";

const EventAttendanceRow = (props) => {
  const { pName, pId, checked, onChange, showCompletion } = props;

  return (
    <div className="attRow flexR">
      <div className="dataCol flexC">
        <p>{pName}</p>
      </div>
      <div className="inputCol flexC">
        <EACheckbox
          column="attendance"
          value={pId}
          checked={checked}
          onChange={onChange}
        />
      </div>
      {showCompletion && (
        <div className="inputCol flexC">
          <EACheckbox
            column="completion"
            value={pId}
            checked={checked}
            onChange={onChange}
          />
        </div>
      )}
    </div>
  );
};

export default EventAttendanceRow;
