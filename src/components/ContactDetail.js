import { useOutletContext, useParams } from "react-router-dom";

import "./ContactDetail.css";

const ContactDetail = () => {
  const { itemId } = useParams();
  // const [thisData] = useOutletContext();
  // console.log(thisData);
  console.log(itemId);

  return (
    <div>
      <p>This is the ContactDetail route.</p>
    </div>
  );
};

export default ContactDetail;
