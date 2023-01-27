import { Outlet } from "react-router-dom";

import "./GroupsLayout.css";

const GroupsLayout = () => {
  return (
    <div id="nl" className="flexR">
      <div id="listing" className="flexC"></div>
      <Outlet id="content" />
    </div>
  );
};

export default GroupsLayout;
