import React, { useState, useRef } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./EventAttendance2.css";

import EventAttendanceRow from "../components/EventAttendanceRow";
import { groupData } from "../components/DummyData";

const EventAttendance2 = () => {
  // TBD: save data to cache --> optional reach

  const { itemId } = useParams();
  const navigate = useNavigate();
  const saAttRef = useRef(null); // check to see if we still need this at the end
  const saCompRef = useRef(null); // check to see if we still need this at the end

  const [thisData] = groupData.events.filter((e) => e.id === itemId);

  const participants = thisData?.participants;
  const { contacts } = groupData;

  const participantNames = participants.map((id) =>
    contacts
      .filter((el) => el.id === id)
      .map((el) => el?.name ?? [el?.fname, el?.lname].join(" "))
  );

  const participantIdName = participants.map((id, index) => [
    id,
    participantNames[index],
  ]);

  const makeParticipantStateObj = (arr) => {
    const kPO = Object.fromEntries(participants.map((id) => [id, false]));
    arr.forEach((pId) => (kPO[pId] = true));
    return kPO;
  };

  const [formData, setFormData] = useState({
    attendance: makeParticipantStateObj(thisData.attendance),
    completion: makeParticipantStateObj(thisData.completion),
  });

  // const [selectAllState, setSelectAllState] = useState({
  //   attendanceAll: false,
  //   completionAll: false,
  // });

  const handleClick = (fieldName, pId) => {
    console.log("click!");
    console.log(fieldName);
    console.log(pId);

    const newFormData = { ...formData };

    newFormData[fieldName][pId] = !formData[fieldName][pId];

    setFormData(newFormData);
  };

  // check all state will be held here and set the "checked start" value for each individual checkbox
  // rerender will restart that value
  // formData here will only manage whether the box 'checked' feature is on or not
  // the checkbox will set its own state and just tell this component whether or not to set it true next time

  const handleSubmit = () => {
    console.log("submitting");

    const attArr = Object.entries(formData.attendance)
      .filter((e) => e[1] === true)
      .map((e) => e[0]);

    const compArr = Object.entries(formData.completion)
      .filter((e) => e[1] === true)
      .map((e) => e[0]);

    const requestBody = {
      attendance: attArr,
      completion: compArr,
    };
    console.log(requestBody);
    return navigate("/");
  };

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
          pName={pName}
          pId={pId}
          checked={checked}
          onChange={handleClick}
          showCompletion={eventTypeTraining}
          index={pId}
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
            <span className="fa-solid fa-classic fa-check">
              <FontAwesomeIcon icon={solid("check")} />
            </span>
          </button>
          <Link to={-1}>
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

export default EventAttendance2;
