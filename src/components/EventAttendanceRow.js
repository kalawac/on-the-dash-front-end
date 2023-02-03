import EACheckbox from "../components/EACheckbox";

import "./EventAttendanceRow.css";

const EventAttendanceRow = (props) => {
  const { pName, pId, checked, onChange, index, showCompletion } = props;

  return (
    <div key={index} className="attRow flexR">
      <div key={`${index}_1`} className="dataCol flexC">
        <p key={`pId${pId}`}>{pName}</p>
      </div>
      <div key={`${index}_2`} className="inputCol flexC">
        <EACheckbox
          column="attendance"
          value={pId}
          checked={checked}
          onChange={onChange}
        />
      </div>
      {showCompletion && (
        <div key={`${index}_3`} className="inputCol flexC">
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
