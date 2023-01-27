import { Outlet, Link, useParams } from "react-router-dom";

import "./GroupView.css";

import { nameObj } from "../components/DummyData";

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

const GroupView = () => {
  const elArr = nameObj;
  const { groupName } = useParams();

  const groupTitle = (groupName) => {
    if (groupName === "contacts") {
      return "Contacts";
    } else if (groupName === "events") {
      return "Events";
    } else if (groupName === "indicators") {
      return "Indicators";
    } else if (groupName === "orgs") {
      return "Organizations";
    } else {
      return "";
    }
  };

  const elList = elArr.map((el, index) => {
    const navLink = ":".concat(el.id);
    return (
      <li key={index}>
        <Link to={`${navLink}`} className="item">
          {el.fname} {el.lname}
        </Link>
      </li>
    );
  });

  return (
    <div id="gl" className="flexR">
      <div id="listing" className="flexC">
        <h1>{groupTitle(groupName)}</h1>
        {elList}
      </div>
      <div id="details" className="flexC">
        <Outlet />
      </div>
    </div>
  );
};

export default GroupView;
