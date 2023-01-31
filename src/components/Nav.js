import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

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
            {/* <div className="row hiddenRow"> */}
            <Link to={`/`}>
              <button title="Dashboard">
                <span className="fa-solid fa-classic fa-chart-column">
                  <FontAwesomeIcon icon={solid("chart-column")} />
                </span>
              </button>
            </Link>
            <Link to={`/pitt`}>
              <button title="PITT">
                <span className="fa-solid fa-classic fa-table-list">
                  <FontAwesomeIcon icon={solid("table-list")} />
                </span>
              </button>
            </Link>
            <Link to={`/indicator-table`}>
              <button title="Indicators">
                <span className="fa-solid fa-classic fa-list">
                  <FontAwesomeIcon icon={solid("list")} />
                </span>
              </button>
            </Link>
            <Link to={`/contacts`}>
              <button title="Contacts">
                <span className="fa-solid fa-classic fa-address-book">
                  <FontAwesomeIcon icon={solid("address-book")} />
                </span>
              </button>
            </Link>
            <Link to={`/orgs`}>
              <button title="Organizations">
                <span className="fa-solid fa-classic fa-people-roof">
                  <FontAwesomeIcon icon={solid("people-roof")} />
                </span>
              </button>
            </Link>
            <Link to={`/events`}>
              <button title="Events">
                <span className="fa-solid fa-classic fa-calendar-days">
                  <FontAwesomeIcon icon={solid("calendar-days")} />
                </span>
              </button>
            </Link>
            {/* </div> */}
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
