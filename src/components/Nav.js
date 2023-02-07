import { Link } from "react-router-dom";
import {
  FaRegChartBar,
  FaThList,
  FaRegAddressCard,
  FaPeopleArrows,
  FaRegCalendarAlt,
  FaListUl,
} from "react-icons/fa";

import "./Nav.css";

// check out UseNavLink when I want to indicate where the user is by applying a
// different style to a button when a page is active

const Nav = () => {
  return (
    <div id="nav" className="flexC">
      <div id="B1B2Spacing">
        <div id="subnav" className="flexC">
          <button id="B1" className="navButton">
            Select View
          </button>
          <div id="viewContent" className={`flexR hiddenVC`}>
            <Link to={`/`}>
              <button title="Dashboard">
                <FaRegChartBar className="fa-icon" />
              </button>
            </Link>
            <Link to={`/pitt`}>
              <button title="PITT">
                <FaThList className="fa-icon" />
              </button>
            </Link>
            <Link to={`/indicator-table`}>
              <button title="Indicators">
                <FaListUl className="fa-icon" />
              </button>
            </Link>
            <Link to={`/contacts`}>
              <button title="Contacts">
                <FaRegAddressCard className="fa-icon" />
              </button>
            </Link>
            <Link to={`/orgs`}>
              <button title="Organizations">
                <FaPeopleArrows className="fa-icon" />
              </button>
            </Link>
            <Link to={`/events`}>
              <button title="Events">
                <span>
                  <FaRegCalendarAlt className="fa-icon" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div id="B2div">
        <Link to={`/import`}>
          <button id="B2" className="navButton impButton">
            Import Data
          </button>
        </Link>
      </div>
      <div id="setButtonDiv">
        <Link to={`/settings`}>
          <button id="setButton" className="navButton">
            Settings
          </button>
        </Link>
      </div>
      <div id="logButtonDiv">
        <button id="logOut" className="navButton">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Nav;
