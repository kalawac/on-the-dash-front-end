import { Link } from "react-router-dom";
import "./EventsView.css";

const EventsView = () => {
  return (
    <div>
      <h1>Events</h1>
      <ul>
        <li key="1">
          <Link to="1" className="item">
            Dummy Event
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default EventsView;
