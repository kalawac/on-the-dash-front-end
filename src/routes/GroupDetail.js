import { Link, useParams } from "react-router-dom";

import "./GroupDetail.css";

import ContactDetail from "../components/ContactDetail";
import OrgDetail from "../components/OrgDetail";
import DetailMenu from "../components/DetailMenu";

const GroupDetail = () => {
  return (
    <div id="gd">
      <section id="detailContent">
        <p>This is the GroupDetail route.</p>
      </section>
      <section id="dm1">
        <DetailMenu />
      </section>
    </div>
  );
};

export default GroupDetail;
