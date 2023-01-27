import { Outlet } from "react-router-dom";

import Nav from "../components/Nav";

import "./NavLayout.css";

const NavLayout = () => {
  return (
    <div id="nl" className="flexR">
      <Nav />
      <Outlet id="content" />
    </div>
  );
};

export default NavLayout;
