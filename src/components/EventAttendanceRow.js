import React, { Fragment } from "react";
import EACheckbox from "../components/EACheckbox";

import "./EventAttendanceRow.css";

const EventAttendanceRow = (props) => {
  const { pName, pId, checked, onChange, index, showCompletion } = props;
  const index2 = "20".concat(pId);
  const index3 = "30".concat(pId);
  const index4 = "40".concat(pId);
  const index5 = "50".concat(pId);
  const index6 = "60".concat(pId);

  console.log(
    `EA: ${index}, ${index2}, ${index3}, ${index4}, ${index5}, ${index6}`
  );

  return (
    <Fragment key={index}>
      <div key={index2} className="attRow flexR">
        <div key={index3} className="dataCol flexC">
          <p key={index6}>{pName}</p>
        </div>
        <div key={index4} className="inputCol flexC">
          <EACheckbox
            column="attendance"
            value={pId}
            checked={checked}
            onChange={onChange}
          />
        </div>
        {showCompletion && (
          <div key={index5} className="inputCol flexC">
            <EACheckbox
              column="completion"
              value={pId}
              checked={checked}
              onChange={onChange}
            />
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default EventAttendanceRow;
