import { Outlet } from "react-router-dom";

import Nav from "../components/Nav";

import "./NavLayout.css";

const NavLayout = () => {
  return (
    <div id="nl" className="flexR">
      <nav id="navDiv">
        <Nav />
      </nav>
      <main id="contentDiv">
        <Outlet />
      </main>
    </div>
  );
};

export default NavLayout;
