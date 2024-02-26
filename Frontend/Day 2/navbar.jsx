import { Link } from 'react-router-dom';
import '../../assets/css/nav.css';
import { FaUserCircle } from 'react-icons/fa'; // Importing the user circle icon from react-icons

function Nav() {
  return (
    <div className="navbar">
      <div className="container">
        {/* <Link to="/home" className="logo">
          Party Planner
        </Link> */}
        <ul className="nav-links">
          <li>
            <Link to="/home" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/viewevents" className="nav-link">Services</Link>
          </li>
          <li>
            <Link to="/bookingform" className="nav-link">Event Booking</Link>
          </li>
          {/* <li>
            <Link to="/paymenthistory" className="nav-link">Payment History</Link>
          </li>
          <li>
            <Link to="/feedback" className="nav-link">Feedback</Link>
          </li> */}
          <li>
            <Link to="/logout" className="nav-link">Sign out</Link>
          </li>
        </ul>
        <div className="profile">
          <Link to="/pofilepage" className="nav-link"> {/* Link to the profile page */}
            <FaUserCircle className="profile-icon" /> {/* Profile icon */}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
