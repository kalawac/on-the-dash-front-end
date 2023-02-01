import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./DetailMenuAddOnly.css";

const DetailMenuAddOnly = () => {
  return (
    <div id="dm3" className="flexC">
      <Link to={"../new"}>
        <button title="Add New">
          <span className="fa-solid fa-classic fa-plus">
            <FontAwesomeIcon icon={solid("plus")} />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default DetailMenuAddOnly;
