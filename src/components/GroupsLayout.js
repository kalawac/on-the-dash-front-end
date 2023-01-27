import { Outlet } from "react-router-dom";

import "./GroupsLayout.css";

const GroupsLayout = () => {
  return (
    <div id="nl" className="flexR">
      <div id="listing" className="flexC"></div>
      <div id="details" className="flexC">
        <Outlet />
      </div>
    </div>
  );
};

export default GroupsLayout;
