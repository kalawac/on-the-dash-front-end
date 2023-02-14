import InputDate from "./InputDate";
import InputNumber from "./InputNumber";
import InputText from "./InputText";
import InputTextMultiline from "./InputTextMultiline";
import MultiSelectField from "./MultiSelectField";
import SingleSelectField from "./SingleSelectField";
import { dummyGroupData } from "./DummyData";

// Quick list of exports:
// modelColumns -- for use in creating AddData and EditData forms;
//     specifies form component to be created
// modelColumnsRequired -- for use in creating AddData and Edit Data forms;
//     specifies if field is required
// formLabels -- specifies label to be used when displaying form fields or data
// selectOptions -- specifies options for each field with multiple or single selection
// contactGender -- object of all gender options in selectOptions.gender,
//     key: subject id, value: subject name
// eventSubjects -- object of all subjects in selectOptions.subjects,
//     key: subject id, value: subject name
// eventSubjectsArr -- array of subject objects with id and name key-value pairs
// eventType -- object of all event types in selectOptions.eventType,
//     key: event type id, value: event type name
// indDisaggregatesArr -- array of indicator disaggregate objects with id and name key-value pairs
// indReportFreq -- object of all options in selectOptions.reportFreq,
//     key: type id, value: type name
// indCalcFreq -- object of all options in selectOptions.reportFreq,
//     key: type id, value: type name
// orgWorkFocusArr -- array of work focus objects with id and name key-value pairs

const nullFunc = (props) => null;

const viewOnlyMulti = (props) => null;
const viewOnlySingle = (props) => null;

export const modelColumns = {
  // include all object properties
  // see docs for instructions on adding a new field
  // use nullFunc for properties that should not be displayed on add or edit or view
  // use a viewOnly function for properties that should only be displayed on view
  contacts: {
    id: nullFunc,
    fname: InputText,
    lname: InputText,
    age: InputNumber,
    gender: SingleSelectField,
    orgs: MultiSelectField, // changing this to orgs
    events: nullFunc, // changing this to events
  },
  events: {
    id: nullFunc,
    name: InputText,
    eventType: SingleSelectField,
    subjects: MultiSelectField,
    // num_days: SingleSelectField, // just do one day at a time
    // consecutive: SingleSelectField, // are the days consective? Yes / No (may be better as radio button but let's work with this for now)
    dates: InputDate, // just doing one day for now. eventually needs to capture an array of dates -- maybe 1, maybe multiple non-consecutive, maybe multiple consecutive
    participants: MultiSelectField, // will have to make from participant data
    attended: viewOnlyMulti, // will have to make from participant data
    completed: viewOnlyMulti, // will have to make from participant data
  },
  indicators: {
    id: nullFunc,
    name: viewOnlySingle,
    indCat: nullFunc,
    standard: viewOnlySingle,
    irn: SingleSelectField, // irn generates ind_name, ind_cat, standard, definition, data_type, disaggregates, and conditions in the DB
    definition: viewOnlySingle,
    dataType: viewOnlySingle,
    disaggregates: viewOnlyMulti,
    dataSource: InputTextMultiline,
    method: InputTextMultiline,
    reportFreq: SingleSelectField,
    calcFreq: SingleSelectField,
    blDate: InputDate,
    blValue: InputNumber,
    lopTarget: InputNumber,
    y1Target: InputNumber,
    y2Target: InputNumber,
  },
  orgs: {
    id: nullFunc,
    name: InputText,
    sector: SingleSelectField,
    foci: MultiSelectField,
    // contactIds: nullFunc,
  },
};

export const modelColumnsRequired = {
  contacts: {
    fname: false, // not all cultures use first names
    lname: true,
    age: false,
    gender: true,
    orgs: false,
    events: false,
  },
  events: {
    name: true,
    eventType: true,
    subjects: false,
    // num_days: true,
    // consecutive: true,
    dates: true,
    participants: false,
    attended: false,
    completed: false,
  },
  indicators: {
    irn: true, // irn generates ind_name, ind_cat, standard, definition, data_type and conditions in the DB
    dataSource: true,
    disaggregates: false,
    method: true,
    reportFreq: true,
    calcFreq: true,
    blDate: true,
    blValue: true,
    lopTarget: false,
    y1Target: false,
    y2Target: false,
  },
  orgs: {
    name: true,
    sector: true,
    foci: false,
    // contactIds: false,
  },
};

const simpleText = (data) => <>{data}</>;

const listItems = (data) => {
  const itemList = data.map((item, index) => <li key={index}>{item}</li>);
  return <ul>{itemList}</ul>;
};

const nullDisplay = (data) => null;

// uglifying process prevents dynamic determination using data in modelColumns
const specialDisplay = {
  contacts: {
    id: nullDisplay,
    orgs: listItems,
    events: nullDisplay,
  },
  events: {
    id: nullDisplay,
    subjects: listItems,
    participants: listItems,
    attended: listItems,
    completed: listItems,
  },
  indicators: {
    id: nullDisplay,
    indCat: nullDisplay,
    disaggregates: listItems,
  },
  orgs: {
    id: nullDisplay,
    foci: listItems,
    // contactIds: nullDisplay,
  },
};

export const displayColumns = (groupName, field) =>
  specialDisplay?.[groupName]?.[field] ?? simpleText;

export const formLabels = {
  age: "Age",
  attended: "Attended",
  bldate: "Baseline Date",
  blValue: "Baseline Value",
  calcFreq: "Calculation Frequency",
  completed: "Completed Training",
  // contactIds: "Associated Contacts",
  dataSource: "Data Source(s)",
  dates: "Date",
  definition: "Indicator Definition",
  disaggregates: "Disaggregates",
  events: "Events",
  fname: "First Name",
  gender: "Gender",
  irn: "Indicator Reference Number",
  lname: "Last Name",
  lopTarget: "Life of Project Target",
  method: "Methodology",
  name: "Name",
  orgs: "Associated Organization(s)",
  participants: "Participants",
  reportFreq: "Reporting Frequency",
  sector: "Sector",
  subjects: "Subject(s) Covered",
  eventType: "Event Type",
  foci: "Main Work Focus/Foci",
  y1Target: "Year 1 Target",
  y2Target: "Year 2 Target",
};

export const selectOptions = {
  attended: [
    { id: "1", name: "Yes" },
    { id: "0", name: "No" },
  ],
  calcFreq: [
    {
      id: "1",
      name: "Quarterly",
    },
    {
      id: "2",
      name: "Semi-Annually",
    },
    {
      id: "3",
      name: "Annually",
    },
  ],
  completed: [
    { id: "1", name: "Yes" },
    { id: "0", name: "No" },
  ],
  disaggregates: [
    { id: "1", name: "Age" },
    { id: "2", name: "Gender" },
    { id: "3", name: "Main Work Focus" },
  ],
  events: dummyGroupData.events,
  eventType: [
    {
      id: "1",
      name: "Conference/Forum",
    },
    {
      id: "2",
      name: "Meeting",
    },
    {
      id: "3",
      name: "Technical Assistance",
    },
    {
      id: "4",
      name: "Training",
    },
    {
      id: "99",
      name: "Other",
    },
  ],
  gender: [
    { id: "1", name: "Female" },
    { id: "2", name: "Male" },
    { id: "3", name: "Non-binary" },
    { id: "4", name: "Other" },
    { id: "9", name: "Unknown" }, // users are not inputting their own gender
  ],
  gvContacts: [
    { id: "default", name: "Last Name (A-Z)" },
    { id: "desc", name: "Last Name (Z-A)" },
    { id: "fname", name: "First Name (A-Z)" },
    { id: "fname-desc", name: "First Name (Z-A)" },
  ],
  gvEvents: [
    { id: "default", name: "Event Name (A-Z)" },
    { id: "desc", name: "Event Name (Z-A)" },
    { id: "date-desc", name: "Event Date (most recent first)" },
    { id: "date", name: "Event Date (oldest first)" },
  ],
  gvOrgs: [
    { id: "default", name: "Organization Name (A-Z)" },
    { id: "desc", name: "Organization Name (Z-A)" },
  ],
  indicators: dummyGroupData.indicators,
  irn: [
    { id: "DR.3.1-2", name: "DR.3.1-2" },
    { id: "DR.3.2-5", name: "DR.3.2-5" },
  ],
  orgs: dummyGroupData.orgs,
  participants: dummyGroupData.contacts,
  reportFreq: [
    {
      id: "1",
      name: "Quarterly",
    },
    {
      id: "2",
      name: "Semi-Annually",
    },
    {
      id: "3",
      name: "Annually",
    },
  ],
  sector: [
    {
      id: "1",
      name: "Academia / Education",
    },
    {
      id: "2",
      name: "Civil Society / NGO",
    },
    {
      id: "3",
      name: "Government",
    },
    {
      id: "4",
      name: "Media",
    },
    {
      id: "5",
      name: "Private Sector Business",
    },
    {
      id: "6",
      name: "Private Sector Foundation",
    },
    {
      id: "7",
      name: "Social Enterprise",
    },
    {
      id: "8",
      name: "Multilateral / Bilateral Funder",
    },
    {
      id: "99",
      name: "Other",
    },
  ],
  subjects: [
    {
      id: "1",
      name: "Accounting",
    },
    {
      id: "2",
      name: "Anti-Corruption: General",
    },
    {
      id: "3",
      name: "Anti-Corruption: Forensic Accounting",
    },
    {
      id: "4",
      name: "Anti-Corruption: Monitoring the Government",
    },
    {
      id: "5",
      name: "Anti-Corruption: Monitoring Stakeholders",
    },
    {
      id: "6",
      name: "Anti-Corruption: Procurement Practices",
    },
    {
      id: "7",
      name: "Civic Education",
    },
    {
      id: "8",
      name: "Conflict Mediation",
    },
    {
      id: "9",
      name: "Conflict Resolution",
    },
    {
      id: "10",
      name: "Consensus Building",
    },
    {
      id: "99",
      name: "Other",
    },
  ],
  foci: [
    {
      id: "1",
      name: "Indigenous people(s)",
    },
    {
      id: "2",
      name: "LGBTI issues",
    },
    {
      id: "3",
      name: "Religious freedom",
    },
    {
      id: "4",
      name: "Women's rights",
    },
    {
      id: "99",
      name: "Other",
    },
  ],
};

const getIdNameObj = (arr) =>
  Object.fromEntries(arr.map((obj) => [obj.id, obj.name]));

export const contactGender = getIdNameObj(selectOptions.gender);

export const eventSubjects = getIdNameObj(selectOptions.subjects);

export const eventSubjectsArr = selectOptions.subjects;

export const eventType = getIdNameObj(selectOptions.eventType);

export const indDisaggregatesArr = selectOptions.disaggregates;

export const indReportFreq = getIdNameObj(selectOptions.reportFreq);

export const indCalcFreq = getIdNameObj(selectOptions.calcFreq);

export const orgWorkFocusArr = selectOptions.foci;
