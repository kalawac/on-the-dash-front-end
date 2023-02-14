import axios from "axios";
import { dummyGroupData } from "./DummyData";

const kBaseUrl = process.env.REACT_APP_BE_URL;

export const getAllContactsAPI = async (searchParams = {}) => {
  const paramArr = Object.entries(searchParams).filter(
    ([_, value]) => value != null
  );

  const location = `${kBaseUrl}`.concat("/contacts");

  if (paramArr.length > 0) {
    const queries = Object.fromEntries(paramArr);

    try {
      const response = await axios.get(location, {
        params: queries,
      });
      return response.data;
    } catch (err) {}
  } else {
    try {
      const response = await axios.get(location);
      return response.data;
    } catch (err) {}
  }
};

export const getAllOrgsAPI = async (searchParams = {}) => {
  const paramArr = Object.entries(searchParams).filter(
    ([_, value]) => value != null
  );
  const location = `${kBaseUrl}`.concat("/orgs");

  if (paramArr.length > 0) {
    const queries = Object.fromEntries(paramArr);

    try {
      const response = await axios.get(location, {
        params: queries,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      const response = await axios.get(location);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
};

export const getAllEventsAPI = async (searchParams = {}) => {
  const paramArr = Object.entries(searchParams).filter(
    ([_, value]) => value != null
  );

  const location = `${kBaseUrl}`.concat("/events");

  if (paramArr.length > 0) {
    const queries = Object.fromEntries(paramArr);
    try {
      const response = await axios.get(location, {
        params: queries,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      const response = await axios.get(location);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
};

export const dummyIndicatorData = [
  {
    id: "1",
    name: "Dummy Indicator 1",
  },
  {
    id: "2",
    name: "Dummy Indicator 2",
  },
];

const getDummyIndicators = (a = null) => dummyIndicatorData;

export const kApiCallMenu = {
  contacts: getAllContactsAPI,
  events: getAllEventsAPI,
  orgs: getAllOrgsAPI,
  indicators: getDummyIndicators,
};

// make helper functions to convert data to what we need to work here and also
// to convert data back to snake case, etc.

// jk, not needed. no camel case. parking for later, in case there
// are other conversions to be had

// const convertContactsFromApi = (contactsArr) => {
//   // const {id, description, is_complete, title} = apiTask;
//   const { is_complete: isComplete, ...rest } = apiTask;

//   // const newTask = {id, description, isComplete: is_complete, title};
//   const newTask = { isCompleteData: isComplete, ...rest };
//   return newTask;
// };

// will we ever need all the data together?
export const constructGroupDataAPI = async (setStateFunc) => {
  const contacts = await getAllContactsAPI();
  const events = await getAllEventsAPI();
  const orgs = await getAllOrgsAPI();
  const groupData = {
    contacts: contacts,
    events: events,
    indicators: dummyIndicatorData, // TODO
    orgs: orgs,
  };
  return setStateFunc(groupData);
};

// call this instead if CSVMode
export const constructGroupDataCSV = (groupName) => {
  const getCSVData = dummyGroupData[groupName];
  return getCSVData;
};

export const createContact = async (data) => {
  const requestBody = {
    fname: data["fname"],
    lname: data["lname"],
    age: parseInt(data["age"]),
    gender: parseInt(data["gender"]),
    orgs: data["orgs"],
  };
  try {
    await axios.post(`${kBaseUrl}/contacts`, requestBody);
  } catch (err) {
    console.log(err);
  }
};

export const createOrg = async (data) => {
  const wf = data.foci.map((el) => parseInt(el));

  const requestBody = {
    name: data["name"],
    sector: parseInt(data["sector"]),
    foci: wf,
  };
  try {
    await axios.post(`${kBaseUrl}/orgs`, requestBody);
  } catch (err) {
    console.log(err);
  }
};

export const createEvent = async (data) => {
  const subjectIntArr = data.subjects.map((el) => parseInt(el));
  const participantObjArr = data.participants.map((el) => {
    return {
      id: el,
      attendance_data: {
        attendance: false,
        completion: false,
      },
    };
  });

  const requestBody = {
    name: data.name,
    date: data.date.toISOString().slice(0, 10),
    subjects: subjectIntArr,
    type: parseInt(data.type),
    participants: participantObjArr,
  };
  try {
    await axios.post(`${kBaseUrl}/events`, requestBody);
  } catch (err) {
    console.log(err);
  }
};

export const updateContact = async (data) => {
  const requestBody = {
    fname: data["fname"],
    lname: data["lname"],
    age: parseInt(data["age"]),
    gender: parseInt(data["gender"]),
    orgs: data["orgs"],
  };
  try {
    await axios.put(`${kBaseUrl}/contacts//${data.id}`, requestBody);
  } catch (err) {
    console.log(err);
  }
};

export const updateOrg = async (data) => {
  const wf = data.foci.map((el) => parseInt(el));

  const requestBody = {
    name: data["name"],
    sector: parseInt(data["sector"]),
    foci: wf,
  };
  try {
    await axios.put(`${kBaseUrl}/orgs/${data.id}`, requestBody);
  } catch (err) {
    console.log(err);
  }
};

export const updateEvent = async (data) => {
  const subjectIntArr = data.subjects.map((el) => parseInt(el));

  const requestBody = {
    name: data.name,
    date: data.date.toISOString().slice(0, 10),
    subjects: subjectIntArr,
    type: parseInt(data.type),
    participants: data.participants,
  };
  try {
    await axios.put(`${kBaseUrl}/events/${data.id}`, requestBody);
  } catch (err) {
    console.log(err);
  }
};
