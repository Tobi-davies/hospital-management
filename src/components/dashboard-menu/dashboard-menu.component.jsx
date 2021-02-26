import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./dashboard-menu.styles.scss";

const DashboardMenu = ({ match, showMenu, setShowMenu }) => {
  console.log(match.path);

  const handleMenuDisplay = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div
      className={
        showMenu ? "dashboard-leftcolumn show-menu" : "dashboard-leftcolumn"
      }
    >
      <Link to="/">
        <div className="dashboard-logo-text">
          <span className="dashboard-logo-small">we</span>
          <span className="dashboard-logo-big">CARE</span>
        </div>
      </Link>
      <div className="dashboard-title">
        <i className="fas fa-home"></i>

        <span>Dashboard</span>
      </div>
      <ul className="dashboard-options">
        <Link to={`${match.path}/profile`}>
          <li onClick={handleMenuDisplay}>
            <i className="fas fa-user"></i>
            <span>User Profile</span>
          </li>
        </Link>
        <Link to={`${match.path}/appointment`}>
          <li onClick={handleMenuDisplay}>
            <i className="fas fa-calendar-check"></i>
            <span>Appointments</span>
          </li>
        </Link>
        <Link to={`${match.path}/billing`}>
          <li onClick={handleMenuDisplay}>
            <i className="fas fa-wallet"></i>
            <span>Billings</span>
          </li>
        </Link>
        <Link to={`${match.path}/notification`}>
          <li onClick={handleMenuDisplay}>
            <i className="fas fa-calendar-check"></i>
            <span>Notifications</span>
          </li>
        </Link>
        <li>
          <i className="fas fa-calendar-check"></i>
          <span>Notifications</span>
        </li>
        <li>
          <i className="fas fa-calendar-check"></i>
          <span>Notifications</span>
        </li>
      </ul>
      <div className="logout">
        <i className="fas fa-power-off"></i>
        <span>LogOut</span>
      </div>
    </div>
  );
};

export default withRouter(DashboardMenu);
