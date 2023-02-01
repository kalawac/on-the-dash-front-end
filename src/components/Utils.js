import InputText from "./InputText";
import MultiSelectField from "./MultiSelectField";
// import SingleSelectField from "./SingleSelectField";
import { groupData } from "./DummyData";

const nullFunc = (props) => null;

export const formLabels = {
  name: "Name",
  fname: "First Name",
  lname: "Last Name",
  orgIds: "Organizations",
};

export const formFields = {
  id: nullFunc,
  name: InputText,
  fname: InputText,
  lname: InputText,
  orgs: nullFunc,
  orgIds: MultiSelectField,
};

export const selectOptions = {
  contacts: groupData.contacts,
  events: groupData.events,
  indicators: groupData.indicators,
  orgIds: groupData.orgs,
};
