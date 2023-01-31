import { useOutletContext, useParams } from "react-router-dom";

import "./GroupDetail.css";

import DetailMenu from "../components/DetailMenu";

const GroupDetail = () => {
  const [thisData] = useOutletContext();
  const { itemId } = useParams();

  console.log(thisData);
  console.log(itemId);

  const [thisItem] = thisData.filter((item) => {
    return item.id === itemId;
  });

  console.log(thisItem);
  console.log(thisItem.name);

  return (
    <div id="gd">
      <section id="detailContent" className="flexC">
        {thisItem?.name && <p>Name: {thisItem?.name}</p>}
        {thisItem?.fname && <p>First Name: {thisItem?.fname}</p>}
        {thisItem?.lname && <p>Last Name: {thisItem?.lname}</p>}
        {thisItem?.id && <p>ID: {thisItem?.id}</p>}
        {thisItem?.orgs && <p>Affiliated organizations: {thisItem?.orgs}</p>}
      </section>
      <section id="dm1" className="flexC">
        <DetailMenu />
      </section>
    </div>
  );
};

export default GroupDetail;
