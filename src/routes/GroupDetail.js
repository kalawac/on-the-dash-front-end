import { Link, useOutletContext, useParams } from "react-router-dom";

import "./GroupDetail.css";

import DetailMenu from "../components/DetailMenu";
import { groupData } from "../components/DummyData";
import {
  formLabels,
  contactGender,
  eventSubjectsArr,
  eventType,
  indDisaggregatesArr,
  indReportFreq,
  indCalcFreq,
  orgWorkFocusArr,
  displayColumns,
} from "../components/Utils";

const GroupDetail = () => {
  const [thisData] = useOutletContext(); // we will need all the data to transform ids into names
  const { groupName, itemId } = useParams();

  const [thisItem] = thisData.filter((item) => {
    return item.id === itemId;
  });

  const itemName =
    thisItem?.name ?? [thisItem?.fname, thisItem?.lname].join(" ");

  const { contacts, events, orgs } = groupData;

  const displayField = (thisItem, field) => thisItem?.[field];
  const displayItemMap = (thisItem, field, arrOfObjs) => {
    if (!thisItem?.[field] || thisItem?.[field].length === 0) {
      return ["[No data]"];
    }

    return thisItem?.[field].map((id) =>
      arrOfObjs
        .filter((el) => el.id === id)
        .map((el) => el?.name ?? [el?.fname, el?.lname].join(" "))
    );
  };

  const displayAssociatedName = (thisItem, field, obj) =>
    obj?.[thisItem?.[field]];

  const displayAge = (thisItem, field) =>
    thisItem?.[field] > 0 ? thisItem?.[field] : "";

  const modelDisplay = {
    // include all object properties to be displayed
    // properties with value nullFunc in modelColumns are not included
    // if included, these properties should have value null
    contacts: {
      // name: (thisItem, field) => [thisItem.fname, thisItem.lname].join(" "),
      fname: displayField,
      lname: displayField,
      age: displayAge,
      gender: (thisItem, field) =>
        displayAssociatedName(thisItem, field, contactGender),
      orgIds: (thisItem, field) => displayItemMap(thisItem, field, orgs),
      eventIds: (thisItem, field) => displayItemMap(thisItem, field, events),
    },
    events: {
      name: displayField,
      type: (thisItem, field) =>
        displayAssociatedName(thisItem, field, eventType),
      subjects: (thisItem, field) =>
        displayItemMap(thisItem, field, eventSubjectsArr),
      dates: (thisItem, field) => displayField(thisItem, field),
      participants: (thisItem, field) =>
        displayItemMap(thisItem, field, contacts),
      attendance: (thisItem, field) =>
        displayItemMap(thisItem, field, contacts),
      completion: (thisItem, field) =>
        displayItemMap(thisItem, field, contacts),
    },
    indicators: {
      irn: displayField,
      dataSource: displayField,
      disaggregates: (thisItem, field) =>
        displayItemMap(thisItem, field, indDisaggregatesArr),
      method: displayField,
      reportFreq: (thisItem, field) =>
        displayAssociatedName(thisItem, field, indReportFreq),
      calcFreq: (thisItem, field) =>
        displayAssociatedName(thisItem, field, indCalcFreq),
      blDate: displayField,
      blValue: displayField,
      lopTarget: displayField,
      y1Target: displayField,
      y2Target: displayField,
    },
    orgs: {
      name: displayField,
      foci: (thisItem, field) =>
        displayItemMap(thisItem, field, orgWorkFocusArr),
      contactIds: (thisItem, field) =>
        displayItemMap(thisItem, field, contacts),
    },
  };

  const displayFields = (thisItem) => {
    // Exclude ID from the mapping list before mapping.
    // Exclude Name because it's covered through itemName
    let itemArr = Object.keys(thisItem).filter(
      (e) => e !== "id" && e !== "name"
    );

    // Exclude completion if not a training event
    if (groupName === "events" && thisItem?.type !== "4") {
      itemArr = itemArr.filter((e) => e !== "completion");
    }

    const fieldArr = itemArr.map((field, index) => {
      const fieldLabel = formLabels?.[field];
      const info = modelDisplay?.[groupName]?.[field](thisItem, field);
      const displayFunction = displayColumns(groupName, field);
      const displayedData = displayFunction(info);

      return (
        <div key={index} className="itemField">
          <div className="label">{fieldLabel}:</div>
          <div className="info">{displayedData}</div>
        </div>
      );
    });

    return fieldArr;
  };

  return (
    <div id="gd">
      <section id="detailContent" className="flexC">
        <div className="itemField">
          <div className="label">Name:</div>
          <div className="info">{itemName}</div>
        </div>
        {displayFields(thisItem)}
        {groupName === "events" && (
          <Link to={`attendance`}>
            <button>Edit Participant Attendance</button>
          </Link>
        )}
      </section>
      <section id="dm1" className="flexC">
        <DetailMenu />
      </section>
    </div>
  );
};

export default GroupDetail;
