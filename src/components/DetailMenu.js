import { FaPlus, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./DetailMenu.css";

const DetailMenu = () => {
  return (
    <div id="dm2" className="flexC">
      <Link to={"../new"}>
        <button title="Add New">
          <span>
            <FaPlus className="fa-icon" />
          </span>
        </button>
      </Link>
      <Link to={"edit"}>
        <button title="Edit">
          <span>
            <FaPencilAlt className="fa-icon" />
          </span>
        </button>
      </Link>
      <Link to={".."}>
        <button title="Delete">
          <span>
            <FaTrashAlt className="fa-icon" />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default DetailMenu;
