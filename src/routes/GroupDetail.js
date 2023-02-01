import { useOutletContext, useParams } from "react-router-dom";

import "./GroupDetail.css";

import DetailMenu from "../components/DetailMenu";

const GroupDetail = () => {
  const [thisData] = useOutletContext();
  const { itemId } = useParams();

  const [thisItem] = thisData.filter((item) => {
    return item.id === itemId;
  });

  const itemName =
    thisItem?.name ?? [thisItem?.fname, thisItem?.lname].join(" ");

  return (
    <div id="gd">
      <section id="detailContent" className="flexC">
        {<p>Name: {itemName}</p>}
        {thisItem?.fname && <p>First Name: {thisItem?.fname}</p>}
        {thisItem?.lname && <p>Last Name: {thisItem?.lname}</p>}
        {thisItem?.orgs && (
          <p>Affiliated organizations: {thisItem?.orgs.join("; ")}</p> // better as a map, but do this last
        )}
      </section>
      <section id="dm1" className="flexC">
        <DetailMenu />
      </section>
    </div>
  );
};

export default GroupDetail;
