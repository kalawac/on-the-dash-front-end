import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./DetailMenu.css";

const DetailMenu = () => {
  return (
    <div id="dm2" className="flexC">
      <Link to={"../new"}>
        <button title="Add New">
          <span className="fa-solid fa-classic fa-plus">
            <FontAwesomeIcon icon={solid("plus")} />
          </span>
        </button>
      </Link>
      <Link to={"edit"}>
        <button title="Edit">
          <span className="fa-solid fa-classic fa-pen-to-square">
            <FontAwesomeIcon icon={solid("pen-to-square")} />
          </span>
        </button>
      </Link>
      <Link to={".."}>
        <button title="Delete">
          <span className="fa-solid fa-classic fa-trash-can">
            <FontAwesomeIcon icon={solid("trash-can")} />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default DetailMenu;
