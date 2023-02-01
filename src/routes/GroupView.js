import { Outlet, Link, useParams, useLoaderData } from "react-router-dom";

import "./GroupView.css";

const GroupView = () => {
  const groupData = useLoaderData();
  const { groupName } = useParams();

  const thisData = groupData[groupName];

  const kTitle = {
    contacts: "Contacts",
    indicators: "Indicators",
    events: "Events",
    orgs: "Organizations",
  };

  const getList = (groupArr) => {
    return groupArr.map((el, index) => {
      const label = el?.name ?? [el?.fname, el?.lname].join(" ");

      return (
        <li key={index} className="list-group-item list-group-item-action">
          <Link to={`${el.id}`} className="item">
            {label}
          </Link>
        </li>
      );
    });
  };

  return (
    <div id="gl" className="flexR">
      <div id="listing" className="container">
        <h1>{kTitle[groupName]}</h1>
        <ul id="groupList" className="list-group list-group-flush">
          {getList(thisData)}
        </ul>
      </div>
      <div id="details" className="flexC">
        <Outlet context={[thisData]} />
      </div>
    </div>
  );
};

export default GroupView;

// const sample = () => {
//   return (
//     <>
//       <div id="sidebar">
//         <h1>React Router Contacts</h1>
//         <div>
//           <form id="search-form" role="search">
//             <input
//               id="q"
//               aria-label="Search contacts"
//               placeholder="Search"
//               type="search"
//               name="q"
//             />
//             <div id="search-spinner" aria-hidden hidden={true} />
//             <div className="sr-only" aria-live="polite"></div>
//           </form>
//           <form method="post">
//             <button type="submit">New</button>
//           </form>
//         </div>
//         <nav>
//           <ul>
//             <li>
//               <a href={`/contacts/1`}>Your Name</a>
//             </li>
//             <li>
//               <a href={`/contacts/2`}>Your Friend</a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       <div id="detail"></div>
//     </>
//   );
// };
