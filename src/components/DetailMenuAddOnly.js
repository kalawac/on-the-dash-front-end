import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import "./DetailMenuAddOnly.css";

const DetailMenuAddOnly = () => {
  return (
    <div id="dm3" className="flexC">
      <Link to={"../new"}>
        <button title="Add New">
          <span>
            <FaPlus className="fa-icon" />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default DetailMenuAddOnly;
