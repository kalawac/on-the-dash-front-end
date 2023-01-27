// import { useLoaderData } from "react-router-dom";

import VizSquares from "../components/VizSquares";

import "./Dashboard.css";

const Dashboard = () => {
  // const loaderData = useLoaderData();
  // const vizArr = loaderData;

  return (
    <div id="dashMain" className="flexR">
      <ul id="vizUL">
        <VizSquares />
      </ul>
    </div>
  );
};

export default Dashboard;
