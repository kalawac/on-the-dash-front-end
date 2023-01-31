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
    id: "abcde1",
    fname: "Husein",
    lname: "Wattana",
    name: "Husein Wattana",
    orgs: ["Hello World LLC"],
    orgIds: [8],
  },
  {
    id: "a1bcde",
    fname: "Nechtan",
    lname: "Kerper",
    name: "Nechtan Kerper",
    orgs: ["Fish Tea", "Hello World LLC"],
    orgIds: [6, 8],
  },
  {
    id: "ab1cde",
    fname: "Robert",
    lname: "Winthrop",
    name: "Robert Winthrop",
    orgs: [],
    orgIds: [],
  },
  {
    id: "abc1de",
    fname: "Anja",
    lname: "McKenzie",
    name: "Anja McKenzie",
    orgs: ["Abel's Organization"],
    orgIds: [1],
  },
  {
    id: "abcd1e",
    fname: "Agata",
    lname: "Iwasaki",
    name: "Agata Iwasaki",
    orgs: ["Hello World LLC"],
    orgIds: [8],
  },
  {
    id: "abcde1",
    fname: "Elikapeka",
    lname: "Jansink",
    name: "Elikapeka Jansink",
    orgs: ["Babies for Boomerangs", "Catch Me!", "Gone for Good"],
    orgIds: [2, 3, 7],
  },
  {
    id: "abcde2",
    fname: "Borislav",
    lname: "Aldershof",
    name: "Borislav Aldershof",
    orgs: ["Didja Know?", "Hello World LLC", "Jekyll & Hyde, Esq."],
    orgIds: [4, 8, 10],
  },
  {
    id: "a2bcde",
    fname: "Dionisie",
    lname: "Sargsyan",
    name: "Dionisie Sargsyan",
    orgs: [],
    orgIds: [],
  },
  {
    id: "ab2cde",
    fname: "Zaki",
    lname: "Vroomen",
    name: "Zaki Vroomen",
    orgs: ["Ignoramuses, Inc.", "Jekyll & Hyde, Esq."],
    orgIds: [9, 10],
  },
  {
    id: "abc2de",
    fname: "Raja",
    lname: "Gautam",
    name: "Raja Gautam",
    orgs: ["Gone for Good"],
    orgIds: [7],
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
    id: "1",
    name: "Dummy Event",
  },
];

export const groupData = {
  contacts: contacts,
  events: events,
  indicators: indicators,
  orgs: orgs,
};

// <Route
//   path="/indicators/new"
//   element={<AddIndicator />}
//   loader={DummyFunction}
//   errorElement={<ErrorPage />}
// />
// <Route
//   path="/indicators/:indicatorId/edit"
//   element={<AddIndicator />}
//   loader={DummyFunction}
//   errorElement={<ErrorPage />}
// />
// <Route
//   path="/contacts"
//   element={<ContactsView />}
//   loader={DummyFunction}
//   errorElement={<ErrorPage />}
// >
//   <Route
//     path="/contacts/new"
//     element={<AddContact />}
//     loader={DummyFunction}
//     errorElement={<ErrorPage />}
//   />
//   <Route
//     path="/contacts/:contactId"
//     element={<ContactDetail />}
//     loader={DummyFunction}
//     errorElement={<ErrorPage />}
//   />
//   <Route
//     path="/contacts/:contactId/edit"
//     element={<EditContact />}
//     loader={DummyFunction}
//     errorElement={<ErrorPage />}
//   />
// </Route>
// <Route
//   path="/orgs"
//   element={<OrgsView />}
//   loader={DummyFunction}
//   errorElement={<ErrorPage />}
// >
//   <Route
//     path="/orgs/new"
//     element={<AddOrg />}
//     loader={DummyFunction}
//     errorElement={<ErrorPage />}
//   />
//   <Route
//     path="/orgs/:orgId"
//     element={<OrgDetail />}
//     loader={DummyFunction}
//     errorElement={<ErrorPage />}
//   />
//   <Route
//     path="/orgs/:orgId/edit"
//     element={<EditOrg />}
//     loader={DummyFunction}
//     errorElement={<ErrorPage />}
//   />
// </Route>
// <Route
//   path="/events"
//   element={<EventsView />}
//   loader={DummyFunction}
//   errorElement={<ErrorPage />}
// >
//   <Route
//     path="/events/new"
//     element={<AddEvent />}
//     errorElement={<ErrorPage />}
//   />
//   <Route
//     path="/events/:eventId"
//     element={<EventDetail />}
//     errorElement={<ErrorPage />}
//   />
//   <Route
//     path="/events/:eventId/edit"
//     element={<EditEvent />}
//     errorElement={<ErrorPage />}
//   />
// </Route>
