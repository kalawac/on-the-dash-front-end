import { Link, useParams } from "react-router-dom";

import "./GroupDetail.css";

import ContactDetail from "../components/ContactDetail";
import OrgDetail from "../components/OrgDetail";
import DetailMenu from "../components/DetailMenu";

const GroupDetail = () => {
  return (
    // needs to be grid so that the two can overlap
    <div id="gd">
      <section id="detailContent" className="flexC">
        <p>This is the GroupDetail route.</p>
      </section>
      <section id="dm1" className="flexC">
        <DetailMenu />
      </section>
    </div>
  );
};

export default GroupDetail;
