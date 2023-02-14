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
    id: "a1",
    name: "Abel's Organization",
    sector: 1,
    foci: ["2", "4"],
  },
  {
    id: "b2",
    name: "Babies for Boomerangs",
    workFoci: ["4"],
  },
  {
    id: "c3",
    name: "Catch Me!",
    workFoci: [],
  },
  {
    id: "d4",
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
    id: "z7",
    name: "Gone for Good",
    workFoci: [],
  },
  {
    id: "k8",
    name: "Hello World LLC",
    workFoci: [],
  },
  {
    id: "9",
    name: "Ignoramuses, Inc.",
    workFoci: [],
  },
  {
    id: "j10",
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
    orgs: [
      {
        id: "a1",
        name: "Abel's Organization",
      },
    ],
    events: [],
  },
  {
    id: "abcd2e",
    fname: "Nechtan",
    lname: "Kerper",
    age: 21,
    gender: "1",
    orgs: [
      {
        id: "z7",
        name: "Gone for Good",
      },
    ],
    events: [],
  },
  {
    id: "a1bc4e",
    fname: "Robert",
    lname: "Winthrop",
    age: 42,
    gender: "3",
    orgs: [],
    events: [],
  },
  {
    id: "ab1cde",
    fname: "Anja",
    lname: "McKenzie",
    age: 24,
    gender: "1",
    orgs: [
      {
        id: "a1",
        name: "Abel's Organization",
      },
    ],
    events: [],
  },
  {
    id: "a2bcde",
    fname: "Agata",
    lname: "Iwasaki",
    age: 53,
    gender: "1",
    orgs: [
      {
        id: "k8",
        name: "Hello World LLC",
      },
    ],
    events: [],
  },
  {
    id: "abc1de",
    fname: "Elikapeka",
    lname: "Jansink",
    age: 52,
    gender: "1",
    orgs: [
      {
        id: "b2",
        name: "Babies for Boomerangs",
      },
      {
        id: "z7",
        name: "Gone for Good",
      },
      {
        id: "c3",
        name: "Catch Me!",
      },
    ],
    events: [],
  },
  {
    id: "5abcde",
    fname: "Borislav",
    lname: "Aldershof",
    age: 0,
    gender: "2",
    orgs: [
      {
        id: "d4",
        name: "Didja Know?",
      },
      {
        id: "k8",
        name: "Hello World LLC",
      },
      {
        id: "j10",
        name: "Jekyll & Hyde, Esq.",
      },
    ],
    events: [],
  },
  {
    id: "302948",
    fname: "Dionisie",
    lname: "Sargsyan",
    age: 35,
    gender: "4",
    orgs: [],
    events: [],
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
    type: 4,
    subjects: [1, 3],
    date: "2022-02-01",
    participants: [
      {
        id: "a1bcde",
        fname: "Husein",
        lname: "Wattana",
        age: 23,
        gender: "4",
        attendance_data: {
          attendance: false,
          completion: false,
        },
      },
      {
        id: "ab1cde",
        fname: "Anja",
        lname: "McKenzie",
        age: 24,
        gender: "1",
        attendance_data: {
          attendance: false,
          completion: false,
        },
      },
      {
        id: "a2bcde",
        fname: "Agata",
        lname: "Iwasaki",
        age: 53,
        gender: "1",
      },
      {
        id: "abc1de",
        fname: "Elikapeka",
        lname: "Jansink",
        age: 52,
        gender: "1",
        attendance_data: {
          attendance: false,
          completion: false,
        },
      },
      {
        id: "302948",
        fname: "Dionisie",
        lname: "Sargsyan",
        age: 35,
        gender: "4",
        attendance_data: {
          attendance: false,
          completion: false,
        },
      },
    ],
  },
  {
    id: "wxyz123",
    name: "How to Restart Time",
    type: 4,
    subjects: [2],
    date: "2022-02-01",
    participants: [
      {
        id: "a1bcde",
        fname: "Husein",
        lname: "Wattana",
        age: 23,
        gender: "4",
        attendance_data: {
          attendance: false,
          completion: false,
        },
      },
      {
        id: "abcd2e",
        fname: "Nechtan",
        lname: "Kerper",
        age: 21,
        gender: "1",
        attendance_data: {
          attendance: false,
          completion: false,
        },
      },
      {
        id: "ab1cde",
        fname: "Anja",
        lname: "McKenzie",
        age: 24,
        gender: "1",
        attendance_data: {
          attendance: false,
          completion: false,
        },
      },
      {
        id: "a2bcde",
        fname: "Agata",
        lname: "Iwasaki",
        age: 53,
        gender: "1",
      },
      {
        id: "abc1de",
        fname: "Elikapeka",
        lname: "Jansink",
        age: 52,
        gender: "1",
        attendance_data: {
          attendance: false,
          completion: false,
        },
      },
    ],
  },
  {
    id: "ofibav",
    name: "Time Manipulation Support",
    type: 4,
    subjects: [1, 2, 3],
    date: "2022-02-02",
    participants: [
      {
        id: "a1bcde",
        fname: "Husein",
        lname: "Wattana",
        age: 23,
        gender: "4",
        attendance_data: {
          attendance: false,
          completion: false,
        },
      },
      {
        id: "a1bc4e",
        fname: "Robert",
        lname: "Winthrop",
        age: 42,
        gender: "3",
        attendance_data: {
          attendance: false,
          completion: false,
        },
      },
      {
        id: "a2bcde",
        fname: "Agata",
        lname: "Iwasaki",
        age: 53,
        gender: "1",
      },
      {
        id: "5abcde",
        fname: "Borislav",
        lname: "Aldershof",
        age: 0,
        gender: "2",
        attendance_data: {
          attendance: false,
          completion: false,
        },
      },
      {
        id: "302948",
        fname: "Dionisie",
        lname: "Sargsyan",
        age: 35,
        gender: "4",
        attendance_data: {
          attendance: false,
          completion: false,
        },
      },
    ],
  },
];

export const dummyGroupData = {
  contacts: contacts,
  events: events,
  indicators: indicators,
  orgs: orgs,
};
