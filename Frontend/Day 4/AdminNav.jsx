import { Link } from 'react-router-dom';
import '../../assets/css/nav.css';
import { FaUserCircle } from 'react-icons/fa'; // Importing the user circle icon from react-icons

function AdminNav() {
  return (
    <div className="navbar">
      <div className="container">
        {/* <Link to="/adminhome" className="logo">
          Admin Page
        </Link> */}
        <ul className="nav-links">
          <li>
            {/* <Link to="/home" className="nav-link">Home</Link> */}
          </li>
          <li>
            <Link to="/adminhome" className="nav-link">Dashboard</Link>
          </li>
          {/* <li>
            <Link to="/viewfeedback" className="nav-link">View Feedback</Link>
          </li>
          <li>
            <Link to="/eventdetail" className="nav-link">Add Events</Link>
          </li> */}
          <li>
            <Link to="/viewbooking" className="nav-link">Bookings</Link>
          </li>
          <li>
            <Link to="/logout" className="nav-link">Sign out</Link>
          </li>
        </ul>
        <div className="profile">
          <Link to="/adminpofile" className="nav-link"> {/* Link to the profile page */}
            <FaUserCircle className="profile-icon" /> {/* Profile icon */}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminNav;
