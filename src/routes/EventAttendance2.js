import React, { useState, useRef, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { FaCheck, FaTimes } from "react-icons/fa";

import "./EventAttendance2.css";

import EventAttendanceRow from "../components/EventAttendanceRow";
import { getAllEventsAPI, updateEvent } from "../components/DataAPICalls";

const EventAttendance2 = () => {
  // TBD: save data to cache --> optional reach

  const { itemId } = useParams();

  const navigate = useNavigate();
  const saAttRef = useRef(null); // check to see if we still need this at the end
  const saCompRef = useRef(null); // check to see if we still need this at the end

  let [thisData, setThisData] = useState([]);
  let [participants, setParticipants] = useState([]);

  useEffect(
    () => async () => {
      const events = await getAllEventsAPI();

      const thisEvent = events.filter((e) => e.id === itemId);

      setParticipants(thisEvent[0].participants);
      setThisData(thisEvent[0]);
    },
    [itemId]
  );

  const [formData, setFormData] = useState({
    attendance: Object.fromEntries(
      participants.map((el) => [el.id, el.attendance_data.attendance])
    ),
    completion: Object.fromEntries(
      participants.map((el) => [el.id, el.attendance_data.completion])
    ),
  });

  // const [selectAllState, setSelectAllState] = useState({
  //   attendanceAll: false,
  //   completionAll: false,
  // });

  const handleClick = (fieldName, pId) => {
    const newFormData = { ...formData };

    newFormData[fieldName][pId] = !formData[fieldName][pId];

    setFormData(newFormData);
  };

  // check all state will be held here and set the "checked start" value for each individual checkbox
  // rerender will restart that value
  // formData here will only manage whether the box 'checked' feature is on or not
  // the checkbox will set its own state and just tell this component whether or not to set it true next time

  const handleSubmit = () => {
    const updatedEvent = thisData;

    updatedEvent.participants.map(
      (el) =>
        (el.attendance_data = {
          attendance: formData.attendance[el.id],
          completion: formData.completion[el.id],
        })
    );
    console.log(updatedEvent);
    updateEvent(updatedEvent);
    return navigate("/");
  };

  const participantIdName = participants.map((el) => [
    el.id,
    [el.fname, el.lname].join(" "),
  ]);

  const mapRows = () => {
    if (participantIdName === []) {
      return (
        <div className="attRow flexR">
          <div className="dataCol flexC">
            <p>There are no participants attached to this event.</p>
          </div>
          <div className="inputCol flexC"></div>
          {thisData.type === "4" && <div className="inputCol flexC"></div>}
        </div>
      );
    }

    const rows = participantIdName.map((p, i) => {
      const [pId, pName] = p;
      const checked = formData[pId];
      const eventTypeTraining = thisData.type === "4" ? true : false;
      return (
        <EventAttendanceRow
          key={pId}
          pName={pName}
          pId={pId}
          checked={checked}
          onChange={handleClick}
          showCompletion={eventTypeTraining}
        />
      );
    });

    return rows;
  };

  return (
    <div id="ea">
      <section id="eaContent" className="flexC">
        <div id="table" className="flexC">
          <div className="headerRow flexR">
            <div className="dataCol flexC">
              <h2>Participants' Names</h2>
            </div>
            <div className="inputCol flexC">
              <h2>Attended?</h2>
            </div>
            {thisData.type === "4" && (
              <div className="inputCol flexC">
                <h2>Completed?</h2>
              </div>
            )}
          </div>
          {/* <div className="selectAllRow flexR">
            <div className="dataCol flexC"></div>
            <div className="inputCol flexC">
              <label htmlFor="attAll">Select All</label>
              <input
                type="checkbox"
                id="attAll"
                name="attendanceAll"
                onClick={() => console.log("clicked ASA!")}
                ref={saAttRef}
              />
            </div>
            {thisData.type === "4" && (
              <div className="inputCol flexC">
                <label htmlFor="compAll">Select All</label>
                <input
                  type="checkbox"
                  id="compAll"
                  name="completionAll"
                  onChange={() => console.log("clicked CSA!")}
                  ref={saCompRef}
                />
              </div>
            )}
          </div> */}
          {mapRows()}
        </div>
      </section>
      <section id="dmEa" className="flexC">
        <div id="dm3" className="flexC">
          <button
            type="submit"
            id="submit"
            onClick={() => handleSubmit()}
            title="Submit form"
          >
            <FaCheck className="fa-icon" />
          </button>
          <Link to={-1}>
            <button title="Close form">
              <FaTimes className="fa-icon" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EventAttendance2;
