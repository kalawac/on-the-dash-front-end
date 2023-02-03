import { Link } from "react-router-dom";

import "./FourOhFour.css";

const FourOhFour = () => {
  return (
    <div id="oops" className="flexC">
      <div id="oopsMessage">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <div id="oopsLine"></div>
        <p>
          The page you were trying to go to doesn't exist. Please either head
          back to the <Link to={"/"}>dashboard</Link> or select another page
          using the buttons in the navigation bar to the left.
        </p>
      </div>
    </div>
  );
};

export default FourOhFour;
