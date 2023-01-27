import "./VizSquares.css";

import viz1 from "../assets/bars-progress-solid.svg";
import viz2 from "../assets/chart-area-solid.svg";
import viz3 from "../assets/chart-bar-regular.svg";
import viz4 from "../assets/chart-line-solid.svg";
import viz5 from "../assets/chart-pie-solid.svg";
import viz6 from "../assets/chart-column-solid.svg";
import viz7 from "../assets/ranking-star-solid.svg";

const VizSquares = () => {
  const iconArr = [viz1, viz2, viz3, viz4, viz5, viz6, viz7];

  return iconArr.map((viz, index) => {
    return (
      <li key={index}>
        <div className="vizsquare flexC">
          <img src={viz} alt="a visualization" />
        </div>
      </li>
    );
  });
};

export default VizSquares;
