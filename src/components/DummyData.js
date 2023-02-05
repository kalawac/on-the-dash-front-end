// export const groupNames = [
//   "Husein Wattana",
//   "Nechtan Kerper",
//   "Robert Winthrop",
//   "Anja McKenzie",
//   "Agata Iwasaki",
//   "Elikapeka Jansink",
//   "Borislav Aldershof",
//   "Dionisie Sargsyan",
//   "Zaki Vroomen",
//   "Raja Gautam",
// ];

const orgs = [
  {
    id: "1",
    name: "Abel's Organization",
  },
  {
    id: "2",
    name: "Babies for Boomerangs",
  },
  {
    id: "3",
    name: "Catch Me!",
  },
  {
    id: "4",
    name: "Didja Know?",
  },
  {
    id: "5",
    name: "Elephant",
  },
  {
    id: "6",
    name: "Fish Tea",
  },
  {
    id: "7",
    name: "Gone for Good",
  },
  {
    id: "8",
    name: "Hello World LLC",
  },
  {
    id: "9",
    name: "Ignoramuses, Inc.",
  },
  {
    id: "10",
    name: "Jekyll & Hyde, Esq.",
  },
];

// I'll have to build 'name' in the back end route on the basis of the sorting query.
// so if they want last name first, we will return "lname, fname" as name.

const contacts = [
  {
    id: "a1bcde",
    fname: "Husein",
    lname: "Wattana",
    gender: "4",
    // name: "Husein Wattana",
    // orgs: ["Hello World LLC"],
    orgIds: ["8"],
  },
  {
    id: "abcd2e",
    fname: "Nechtan",
    lname: "Kerper",
    gender: "1",
    // name: "Nechtan Kerper",
    // orgs: ["Fish Tea", "Hello World LLC"],
    orgIds: ["6", "8"],
  },
  {
    id: "a1bc4e",
    fname: "Robert",
    lname: "Winthrop",
    gender: "3",
    // name: "Robert Winthrop",
    // orgs: [],
    orgIds: [],
  },
  {
    id: "ab1cde",
    fname: "Anja",
    lname: "McKenzie",
    gender: "1",
    // name: "Anja McKenzie",
    // orgs: ["Abel's Organization"],
    orgIds: ["1"],
  },
  {
    id: "a2bcde",
    fname: "Agata",
    lname: "Iwasaki",
    gender: "1",
    // name: "Agata Iwasaki",
    // orgs: ["Hello World LLC"],
    orgIds: ["8"],
  },
  {
    id: "abc1de",
    fname: "Elikapeka",
    lname: "Jansink",
    gender: "1",
    // name: "Elikapeka Jansink",
    // orgs: ["Babies for Boomerangs", "Catch Me!", "Gone for Good"],
    orgIds: ["2", "3", "7"],
  },
  {
    id: "5abcde",
    fname: "Borislav",
    lname: "Aldershof",
    gender: "2",
    // name: "Borislav Aldershof",
    // orgs: ["Didja Know?", "Hello World LLC", "Jekyll & Hyde, Esq."],
    orgIds: ["4", "8", "10"],
  },
  {
    id: "302948",
    fname: "Dionisie",
    lname: "Sargsyan",
    gender: "4",
    // name: "Dionisie Sargsyan",
    // orgs: [],
    orgIds: [],
  },
  {
    id: "abcdef",
    fname: "Zaki",
    lname: "Vroomen",
    gender: "3",
    // name: "Zaki Vroomen",
    // orgs: ["Ignoramuses, Inc.", "Jekyll & Hyde, Esq."],
    orgIds: ["9", "10"],
  },
  {
    id: "hijklm",
    fname: "Raja",
    lname: "Gautam",
    gender: "2",
    // name: "Raja Gautam",
    // orgs: ["Gone for Good"],
    orgIds: ["7"],
  },
];

const indicators = [
  {
    id: "1",
    name: "Dummy Indicator 1",
  },
  {
    id: "2",
    name: "Dummy Indicator 2",
  },
];

const events = [
  {
    id: "la21di-dah",
    name: "How to Stop Time",
    type: "4",
    subjects: ["1", "3"],
    dates: "Tue Feb 1 2022",
    participants: ["abcd2e", "a2bcde", "302948", "hijklm"],
    attendance: [],
    completion: [], // only for trainings
  },
  {
    id: "wxyz123",
    name: "How to Restart Time",
    type: "4",
    subjects: ["2"],
    dates: "Tue Feb 1 2022",
    participants: ["abcd2e", "hijklm"],
    attendance: [],
    completion: [], // only for trainings
  },
  {
    id: "ofibav",
    name: "Time Manipulation Support",
    type: "3",
    subjects: ["1", "2", "3"],
    dates: "Wed Feb 2 2022",
    participants: ["abcd2e", "a2bcde", "hijklm"],
    attendance: [],
    completion: [], // only for trainings
  },
];

export const groupData = {
  contacts: contacts,
  events: events,
  indicators: indicators,
  orgs: orgs,
};
