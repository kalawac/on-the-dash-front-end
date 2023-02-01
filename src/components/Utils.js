import InputDate from "./InputDate";
import InputNumber from "./InputNumber";
import InputText from "./InputText";
import InputTextMultiline from "./InputTextMultiline";
import MultiSelectField from "./MultiSelectField";
import SingleSelectField from "./SingleSelectField";
import { groupData } from "./DummyData";

const nullFunc = (props) => null;

export const modelColumns = {
  contacts: {
    id: nullFunc,
    fname: InputText,
    lname: InputText,
    orgs: nullFunc,
    orgIds: MultiSelectField,
  },
  events: {
    id: nullFunc,
    name: InputText,
    type: SingleSelectField,
    subject: MultiSelectField,
    // num_days: SingleSelectField, // just do one day at a time
    // consecutive: SingleSelectField, // are the days consective? Yes / No (may be better as radio button but let's work with this for now)
    dates: InputDate, // TBD input date -- just doing one day for now. eventually needs to capture an array of dates -- maybe 1, maybe multiple non-consecutive, maybe multiple consecutive
    participants: MultiSelectField, // this will then need to generate a list of participants in a matrix, sighghghghgh. maybe I hardcode that item.
    attendanceCompletion: nullFunc, // this can be a matrix specifically for this that then generates two separate fields for state, partipants_attended and participants_completed.
  },
  indicators: {
    id: nullFunc,
    irn: SingleSelectField, // irn generates ind_name, ind_cat, standard, data_type and conditions in the DB
    // definition: InputTextMultiline, // TBD: multiline version
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
  },
};

export const modelColumnsRequired = {
  contacts: {
    fname: true,
    lname: true,
    orgIds: false,
  },
  events: {
    name: true,
    type: true,
    subject: false,
    // num_days: SingleSelectField, // just do one day at a time
    // consecutive: SingleSelectField, // are the days consective? Yes / No (may be better as radio button but let's work with this for now)
    dates: true, // TBD input date -- just doing one day for now. eventually needs to capture an array of dates -- maybe 1, maybe multiple non-consecutive, maybe multiple consecutive
    participants: false, // this will then need to generate a list of participants in a matrix, sighghghghgh. maybe I hardcode that item.
    attendanceCompletion: false, // this can be a matrix specifically for this that then generates two separate fields for state, partipants_attended and participants_completed.
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
  },
};

export const formLabels = {
  attendance: "Attended?",
  attendanceCompletion: "Participant Attendance",
  bldate: "Baseline Date",
  blValue: "Baseline Value",
  calcFreq: "Calculation Frequency",
  completion: "Completed?",
  dataSource: "Data Source(s)",
  dates: "Date",
  definition: "Indicator Definition",
  fname: "First Name",
  irn: "Indicator Reference Number",
  lname: "Last Name",
  lopTarget: "Life of Project Target",
  method: "Methodology",
  name: "Name",
  orgIds: "Organization(s)",
  participants: "Participants",
  reportFreq: "Reporting Frequency",
  subject: "Subject(s) Covered",
  type: "Event Type",
  y1Target: "Year 1 Target",
  y2Target: "Year 2 Target",
};

// export const formFields = {
//   id: nullFunc,
//   name: InputText,
//   fname: InputText,
//   lname: InputText,
//   orgs: nullFunc,
//   orgIds: MultiSelectField,
// };

export const selectOptions = {
  events: groupData.events,
  indicators: groupData.indicators,
  irn: [
    { id: "DR.3.1-2", name: "DR.3.1-2" },
    { id: "DR.3.2-5", name: "DR.3.2-5" },
  ],
  orgIds: groupData.orgs,
  participants: groupData.contacts,
  subject: [
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
