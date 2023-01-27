import { Outlet } from "react-router-dom";

import Nav from "../components/Nav";

import "./NavLayout.css";

const NavLayout = () => {
  return (
    <div id="nl" className="flexR">
      <div id="navDiv">
        <Nav />
      </div>
      <div id="contentDiv">
        <Outlet />
      </div>
    </div>
  );
};

export default NavLayout;
