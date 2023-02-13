// EVENT
// [
//   {
//       "date": "2023-02-13",
//       "id": "0a86b2c9-f035-422e-b63c-88e056f2d948",
//       "name": "Afternoon Stretches",
//       "participants": [
//           {
//               "age": 65,
//               "attendance_data": {
//                   "attendance": false,
//                   "completion": false
//               },
//               "fname": "Teresita",
//               "gender": 1,
//               "id": "c9a16d69-af6d-4d99-8346-b0839884b385",
//               "lname": "Reyes"
//           },
//           {
//               "age": 37,
//               "attendance_data": {
//                   "attendance": true,
//                   "completion": true
//               },
//               "fname": "Nemonte",
//               "gender": 1,
//               "id": "cc9860cd-a366-4da4-ab74-b1b484d3ef71",
//               "lname": "Nenquimo"
//           },
//           {
//               "age": 26,
//               "attendance_data": {
//                   "attendance": true,
//                   "completion": false
//               },
//               "fname": "Agnes",
//               "gender": 1,
//               "id": "c676b0ff-b7f7-463c-8d18-f88625f2a03b",
//               "lname": "Chow"
//           },
//           {
//               "age": 53,
//               "attendance_data": {
//                   "attendance": true,
//                   "completion": false
//               },
//               "fname": "Morana",
//               "gender": 2,
//               "id": "89b832b4-679d-4523-92b0-234648f4a0d0",
//               "lname": "Smodlaka"
//           }
//       ],
//       "subjects": [
//           7,
//           99
//       ],
//       "type": 4
//   }
// ]

// ORG
// {
//   "foci": [
//     1,
//     2
// ],
// "id": "2f654823-cdab-47b8-80a2-60192ad459db",
// "name": "Echolocation",
// "sector": 7
// }

// CONTACT
// {
//   "age": 26,
//   "events": [],
//   "fname": "Nat",
//   "gender": 2,
//   "id": "cbcc8409-700a-45ad-9cb8-cf4dc25dff8e",
//   "lname": "Bentley",
//   "orgs": [
//       {
//           "id": "621a5386-859f-46f4-9204-3fddfec2493e",
//           "name": "Thriving"
//       }
//   ]
// }

const orgs = [
  {
    id: "1",
    name: "Abel's Organization",
    workFoci: ["2", "4"],
  },
  {
    id: "2",
    name: "Babies for Boomerangs",
    workFoci: ["4"],
  },
  {
    id: "3",
    name: "Catch Me!",
    workFoci: [],
  },
  {
    id: "4",
    name: "Didja Know?",
    workFoci: [],
  },
  {
    id: "5",
    name: "Elephant",
    workFoci: ["1", "2", "4"],
  },
  {
    id: "6",
    name: "Fish Tea",
    workFoci: ["4"],
  },
  {
    id: "7",
    name: "Gone for Good",
    workFoci: [],
  },
  {
    id: "8",
    name: "Hello World LLC",
    workFoci: [],
  },
  {
    id: "9",
    name: "Ignoramuses, Inc.",
    workFoci: [],
  },
  {
    id: "10",
    name: "Jekyll & Hyde, Esq.",
    workFoci: ["3"],
  },
];

// I'll have to build 'name' in the back end route on the basis of the sorting query.
// so if they want last name first, we will return "lname, fname" as name.

const contacts = [
  {
    id: "a1bcde",
    fname: "Husein",
    lname: "Wattana",
    age: 23,
    gender: "4",
    // name: "Husein Wattana",
    // orgs: ["Hello World LLC"],
    orgIds: ["8"],
  },
  {
    id: "abcd2e",
    fname: "Nechtan",
    lname: "Kerper",
    age: 21,
    gender: "1",
    // name: "Nechtan Kerper",
    // orgs: ["Fish Tea", "Hello World LLC"],
    orgIds: ["6", "8"],
  },
  {
    id: "a1bc4e",
    fname: "Robert",
    lname: "Winthrop",
    age: 42,
    gender: "3",
    // name: "Robert Winthrop",
    // orgs: [],
    orgIds: [],
  },
  {
    id: "ab1cde",
    fname: "Anja",
    lname: "McKenzie",
    age: 24,
    gender: "1",
    // name: "Anja McKenzie",
    // orgs: ["Abel's Organization"],
    orgIds: ["1"],
  },
  {
    id: "a2bcde",
    fname: "Agata",
    lname: "Iwasaki",
    age: 53,
    gender: "1",
    // name: "Agata Iwasaki",
    // orgs: ["Hello World LLC"],
    orgIds: ["8"],
  },
  {
    id: "abc1de",
    fname: "Elikapeka",
    lname: "Jansink",
    age: 52,
    gender: "1",
    // name: "Elikapeka Jansink",
    // orgs: ["Babies for Boomerangs", "Catch Me!", "Gone for Good"],
    orgIds: ["2", "3", "7"],
  },
  {
    id: "5abcde",
    fname: "Borislav",
    lname: "Aldershof",
    age: 0,
    gender: "2",
    // name: "Borislav Aldershof",
    // orgs: ["Didja Know?", "Hello World LLC", "Jekyll & Hyde, Esq."],
    orgIds: ["4", "8", "10"],
  },
  {
    id: "302948",
    fname: "Dionisie",
    lname: "Sargsyan",
    age: 35,
    gender: "4",
    // name: "Dionisie Sargsyan",
    // orgs: [],
    orgIds: [],
  },
  {
    id: "abcdef",
    fname: "Zaki",
    lname: "Vroomen",
    age: 27,
    gender: "3",
    // name: "Zaki Vroomen",
    // orgs: ["Ignoramuses, Inc.", "Jekyll & Hyde, Esq."],
    orgIds: ["9", "10"],
  },
  {
    id: "hijklm",
    fname: "Raja",
    lname: "Gautam",
    age: 35,
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
    dates: "2022-02-01T00:00:00.000Z", // save as date.toISOString(). See note below object.
    participants: ["abcd2e", "a2bcde", "302948", "hijklm"],
    attendance: [],
    completion: [], // only for trainings
  },
  {
    id: "wxyz123",
    name: "How to Restart Time",
    type: "4",
    subjects: ["2"],
    dates: "2022-02-01T00:00:00.000Z",
    participants: ["abcd2e", "hijklm"],
    attendance: [],
    completion: [], // only for trainings
  },
  {
    id: "ofibav",
    name: "Time Manipulation Support",
    type: "3",
    subjects: ["1", "2", "3"],
    dates: "2022-02-02T00:00:00.000Z",
    participants: ["abcd2e", "a2bcde", "hijklm"],
    attendance: [],
    completion: [], // only for trainings
  },
];

// note: have to make the date first before casting to ISO String
// don't forget the 'new' or it won't work
// remember months are 0 indexed when creating new Dates! :( Month 01 is Feb!
// nd = new Date(2022, 01, 1)
// nd.toISOString()
// => '2022-02-01T00:00:00.000Z'

export const groupData = {
  contacts: contacts,
  events: events,
  indicators: indicators,
  orgs: orgs,
};
