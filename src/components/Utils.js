import InputDate from "./InputDate";
import InputNumber from "./InputNumber";
import InputText from "./InputText";
import InputTextMultiline from "./InputTextMultiline";
import MultiSelectField from "./MultiSelectField";
import SingleSelectField from "./SingleSelectField";
import { groupData } from "./DummyData";

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
// eventSubjectsArr -- list of subject objects with id and name key-value pairs
// eventType -- object of all types in selectOptions.type,
//     key: type id, value: type name
// indReportFreq -- object of all options in selectOptions.reportFreq,
//     key: type id, value: type name
// indCalcFreq -- object of all options in selectOptions.reportFreq,
//     key: type id, value: type name

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
    gender: SingleSelectField,
    // orgs: nullFunc,
    orgIds: MultiSelectField,
    eventIds: nullFunc,
  },
  events: {
    id: nullFunc,
    name: InputText,
    type: SingleSelectField,
    subjects: MultiSelectField,
    // num_days: SingleSelectField, // just do one day at a time
    // consecutive: SingleSelectField, // are the days consective? Yes / No (may be better as radio button but let's work with this for now)
    dates: InputDate, // TBD input date -- just doing one day for now. eventually needs to capture an array of dates -- maybe 1, maybe multiple non-consecutive, maybe multiple consecutive
    participants: MultiSelectField, // this will then need to generate a list of participants in a matrix, sighghghghgh. maybe I hardcode that item.
    attendance: viewOnlyMulti, // input after this step / edit separately
    completion: viewOnlyMulti, // input after this step / edit separately
  },
  indicators: {
    id: nullFunc,
    indName: viewOnlySingle,
    indCat: nullFunc,
    standard: viewOnlySingle,
    irn: SingleSelectField, // irn generates ind_name, ind_cat, standard, definition, data_type, disaggregates, and conditions in the DB
    definition: viewOnlySingle, // TBD: multiline version
    dataType: viewOnlySingle,
    dataSource: InputTextMultiline, // multiline
    method: InputTextMultiline, //multiline
    reportFreq: SingleSelectField,
    calcFreq: SingleSelectField,
    blDate: InputDate, // input date
    blValue: InputNumber, // TBD: input number
    lopTarget: InputNumber, // input number
    y1Target: InputNumber, // input number
    y2Target: InputNumber, // input number
  },
  orgs: {
    id: nullFunc,
    name: InputText,
    contactIds: nullFunc,
  },
};

export const modelColumnsRequired = {
  contacts: {
    fname: true,
    lname: true,
    orgIds: false,
    eventIds: false,
  },
  events: {
    name: true,
    type: true,
    subjects: false,
    // num_days: SingleSelectField, // just do one day at a time
    // consecutive: SingleSelectField, // are the days consective? Yes / No (may be better as radio button but let's work with this for now)
    dates: true, // TBD input date -- just doing one day for now. eventually needs to capture an array of dates -- maybe 1, maybe multiple non-consecutive, maybe multiple consecutive
    participants: false, // this will then need to generate a list of participants in a matrix, sighghghghgh. maybe I hardcode that item.
    attendance: false,
    completion: false,
  },
  indicators: {
    irn: true, // irn generates ind_name, ind_cat, standard, definition, data_type and conditions in the DB
    dataSource: true, // multiline
    method: true, //multiline
    reportFreq: true,
    calcFreq: true,
    blDate: true, // input date
    blValue: true, // TBD: input number
    lopTarget: false, // input number
    y1Target: false, // input number
    y2Target: false, // input number
  },
  orgs: {
    name: true,
    contactIds: false,
  },
};

export const formLabels = {
  attendance: "Attended",
  bldate: "Baseline Date",
  blValue: "Baseline Value",
  calcFreq: "Calculation Frequency",
  completion: "Completed Training",
  contactIds: "Associated Contacts",
  dataSource: "Data Source(s)",
  dates: "Date",
  definition: "Indicator Definition",
  eventIds: "Events", // try to figure out how to show attended, completed for each event. later.
  fname: "First Name",
  gender: "Gender",
  irn: "Indicator Reference Number",
  lname: "Last Name",
  lopTarget: "Life of Project Target",
  method: "Methodology",
  name: "Name",
  orgIds: "Associated Organization(s)",
  participants: "Participants",
  reportFreq: "Reporting Frequency",
  subjects: "Subject(s) Covered",
  type: "Event Type",
  y1Target: "Year 1 Target",
  y2Target: "Year 2 Target",
};

// make changes to event subject and type lists here
export const selectOptions = {
  attendance: [
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
  completion: [
    { id: "1", name: "Yes" },
    { id: "0", name: "No" },
  ],
  events: groupData.events,
  gender: [
    { id: "1", name: "Female" },
    { id: "2", name: "Male" },
    { id: "3", name: "Non-binary" },
    { id: "4", name: "Other" },
  ],
  indicators: groupData.indicators,
  irn: [
    { id: "DR.3.1-2", name: "DR.3.1-2" },
    { id: "DR.3.2-5", name: "DR.3.2-5" },
  ],
  orgIds: groupData.orgs,
  participants: groupData.contacts,
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
  subjects: [
    {
      id: "1",
      name: "Subject 1",
    },
    {
      id: "2",
      name: "Subject 2",
    },
    {
      id: "3",
      name: "Subject 3",
    },
  ],
  type: [
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
};

const getIdNameObj = (arr) =>
  Object.fromEntries(arr.map((obj) => [obj.id, obj.name]));

export const contactGender = getIdNameObj(selectOptions.gender);

export const eventSubjects = getIdNameObj(selectOptions.subjects);

export const eventSubjectsArr = selectOptions.subjects;

export const eventType = getIdNameObj(selectOptions.type);

export const indReportFreq = getIdNameObj(selectOptions.reportFreq);

export const indCalcFreq = getIdNameObj(selectOptions.calcFreq);
