import { useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./EventAttendance.css";

import EACheckbox from "../components/EACheckbox";
import { groupData } from "../components/DummyData";

const EventAttendance = () => {
  // create clean-looking three column layout (flexR, 3 divs, no wrap)
  // first column ports in participants associated with the event ID
  // second column has radio buttons for attendance (yes/no)
  // third column has radio buttons for completed (yes/no)
  // submit button at top-right? -- cancel (takes you back to item) / save (submits form)
  // save data to cache --> optional reach; not for right now

  const { itemId } = useParams();
  const saAttRef = useRef(null);
  const saCompRef = useRef(null);

  const [thisData] = groupData.events.filter((e) => e.id === itemId);

  const participants = thisData?.participants;
  const { contacts } = groupData;

  const makeParticipantObj = (arr) =>
    Object.fromEntries(arr.map((id) => [id, true]));

  const [formData, setFormData] = useState({
    attendance: makeParticipantObj(thisData.attendance),
    completion: makeParticipantObj(thisData.completion),
  });

  const [selectAllState, setSelectAllState] = useState({
    attendanceAll: 0,
    completionAll: 0,
  });

  // not doing this in the new version: it will only work upon click
  const determineAllChecked = (dataObj, property, ref) => {
    const newState = { ...selectAllState };
    if (Object.keys(dataObj).length === participants.length) {
      ref.current.checked = true;
      newState[property] = 1;
      return setSelectAllState(newState);
    } else if (Object.keys(dataObj).length >= 1) {
      ref.current.indeterminate = true;
      newState[property] = -1;
      return setSelectAllState(newState);
    } else {
      ref.current.checked = false;
      newState[property] = 0;
      return setSelectAllState(newState);
    }
  };

  // not doing this in the new version: it will only work on click
  const attDetermineAllChecked = () =>
    determineAllChecked(formData.attendance, "completionAll", saAttRef);

  // not doing this in the new version: it will only work on click
  const compDetermineAllChecked = () =>
    determineAllChecked(formData.completion, "attendanceAll", saCompRef);

  // not doing this in the new version: it will only work on click
  const formDataUpdatesSAState = () => {
    attDetermineAllChecked();
    compDetermineAllChecked();
  };

  const handleChange = (event) => {
    console.log("change!");
    console.log(event.target);
    const fieldValue = event.target.value; // participant Id
    const fieldName = event.target.name; // attendance or completion

    const newFormData = { ...formData };

    if (newFormData[fieldName]?.[fieldValue]) {
      newFormData[fieldName][fieldValue] = false;
    } else {
      newFormData[fieldName][fieldValue] = true;
    }

    setFormData(newFormData);
    formDataUpdatesSAState();
  };

  const checkAll = (column) => {
    const newArr = makeParticipantObj(participantArr);
    const newFormData = { ...formData };
    newFormData[column] = newArr;

    setFormData(newFormData);
  };

  const uncheckAll = (column) => {
    const newFormData = { ...formData };
    newFormData[column] = {};
    setFormData(newFormData);
  };

  const attHandleSelectAll = (event) => {
    console.log("change A select all!");
    if (selectAllState.attendanceAll === 1) {
      uncheckAll("attendance");
      setSelectAllState.attendanceAll = 0;
    } else {
      checkAll("attendance");
      setSelectAllState.attendanceAll = 1;
    }
  };

  const compHandleSelectAll = (event) => {
    console.log("change C select all!");

    if (selectAllState.completionAll === 1) {
      uncheckAll("completion");
      setSelectAllState.completionAll = 0;
    } else {
      checkAll("completion");
      setSelectAllState.completionAll = 1;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitting");
    const attArr = Object.keys(formData.attendance);
    const compArr = Object.keys(formData.completion);
    const requestBody = {
      attendance: attArr,
      completion: compArr,
    };
    console.log(requestBody);
  };

  const contactIdstoNames = () => {
    const participantNameArr = participants.map((id) =>
      contacts
        .filter((el) => el.id === id)
        .map((el) => el?.name ?? [el?.fname, el?.lname].join(" "))
    );

    return participantNameArr;
  };

  const participantArr = contactIdstoNames();

  const participantMap =
    participantArr.length > 0 ? (
      participantArr.map((person, index) => (
        <div key={index} className="attRow flexR">
          {person}
        </div>
      ))
    ) : (
      <div key="1" className="attRow flexR">
        No associated participants.
      </div>
    );

  const attendedMap = participantArr.map((pId, index) => {
    const attChecked = formData.attendance?.[pId] ? true : false;
    return (
      <EACheckbox
        column="attendance"
        value={pId}
        checked={attChecked}
        onChange={handleChange}
      />
    );
  });

  const completedMap = participantArr.map((pId, index) => {
    const compChecked = formData.completion?.[pId] ? true : false;
    return (
      <EACheckbox
        column="completion"
        value={pId}
        checked={compChecked}
        onChange={handleChange}
      />
    );
  });

  return (
    <div id="ea">
      <section id="eaContent" className="flexR">
        <div id="participants" className="dataCol">
          <div className="headerRow flexC">
            <h2>Participants' Names</h2>
          </div>
          {participantMap}
        </div>
        <div id="attendance" className="inputCol">
          <div className="headerRow flexC">
            <h2>Attended?</h2>
            <div>
              <label htmlFor="attAll">Select All</label>
              <input
                type="checkbox"
                id="attAll"
                name="attendanceAll"
                onClick={() => attHandleSelectAll()}
                ref={saAttRef}
              />
            </div>
          </div>
          {attendedMap}
        </div>
        {thisData.type === "4" && (
          <div id="completion" className="inputCol">
            <div className="headerRow flexC">
              <h2>Completed?</h2>
              <div>
                <label htmlFor="compAll">Select All</label>
                <input
                  type="checkbox"
                  id="compAll"
                  name="completionAll"
                  onChange={() => compHandleSelectAll()}
                  ref={saCompRef}
                />
              </div>
            </div>
            {completedMap}
          </div>
        )}
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
          <Link to={`..`}>
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
