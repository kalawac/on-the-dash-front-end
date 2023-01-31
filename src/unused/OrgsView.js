import { Link } from "react-router-dom";
import { orgs } from "../components/DummyData";

import "./OrgsView.css";

const getList = () => {
  return orgs.map((el, index) => {
    return (
      <li key={index}>
        <Link to={`${el.id}`} className="item">
          {el.name}
        </Link>
      </li>
    );
  });
};

const OrgsView = () => {
  return (
    <div>
      <h1>Organizations</h1>
      <ul>{getList}</ul>
    </div>
  );
};

export default OrgsView;
