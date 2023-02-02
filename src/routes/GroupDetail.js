import { useOutletContext, useParams } from "react-router-dom";

import "./GroupDetail.css";

import DetailMenu from "../components/DetailMenu";
import { groupData } from "../components/DummyData";
import {
  formLabels,
  eventSubjectsArr,
  eventType,
  indReportFreq,
  indCalcFreq,
  modelColumns,
} from "../components/Utils";

const SimpleText = (data) => <>{data}</>;

const ListItems = (data) => {
  const itemList = data.map((item, index) => <li key={index}>{item}</li>);
  return <ul>{itemList}</ul>;
};

const kDisplayComponent = {
  InputDate: SimpleText,
  InputNumber: SimpleText,
  InputText: SimpleText,
  InputTextMultiline: SimpleText,
  MultiSelectField: ListItems,
  SingleSelectField: SimpleText,
  viewOnly: ListItems,
  nullFunc: (info) => null,
};

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
  const displayItemMap = (thisItem, field, group) => {
    if (!thisItem?.[field] || thisItem?.[field].length === 0) {
      return ["[None]"];
    }

    return thisItem?.[field].map((id) =>
      group
        .filter((el) => el.id === id)
        .map((el) => el?.name ?? [el?.fname, el?.lname].join(" "))
    );
  };

  const displayAssociatedName = (thisItem, field, obj) =>
    obj?.[thisItem?.[field]];

  const modelDisplay = {
    // include all object properties to be displayed
    // properties with value nullFunc in modelColumns are not included
    // if included, these properties should have value null
    contacts: {
      // name: (thisItem, field) => [thisItem.fname, thisItem.lname].join(" "),
      fname: displayField,
      lname: displayField,
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
      contactIds: (thisItem, field) =>
        displayItemMap(thisItem, field, contacts),
    },
  };

  const displayFields = (thisItem) => {
    // Exclude ID from the mapping list before mapping.
    // Exclude Name because it's covered through itemName
    // Exclude attendance and completion because they are nullFunc in modelColumns
    const itemArr = Object.keys(thisItem).filter(
      (e) => e !== "id" && e !== "name"
    );

    const fieldArr = itemArr.map((field, index) => {
      const fieldLabel = formLabels?.[field];
      const info = modelDisplay?.[groupName]?.[field](thisItem, field);
      const DisplayedData =
        kDisplayComponent?.[modelColumns[groupName][field].name];

      return (
        <div key={index} className="itemField">
          <div className="label">{fieldLabel}:</div>
          <div className="info">{DisplayedData(info)}</div>
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
      </section>
      <section id="dm1" className="flexC">
        <DetailMenu />
      </section>
    </div>
  );
};

export default GroupDetail;
