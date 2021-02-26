import React from "react";
import { createStructuredSelector } from "reselect";
import { currentUser } from "../../redux/user/user.selectors";
import "./dashboard-header.styles.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const DashboardHeader = ({
  currentUser: { displayName },
  setShowMenu,
  showMenu,
}) => {
  console.log(displayName);

  const handleMenuDisplay = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <div className="dashboard-header">
      <Link to="/">
        <div className="logo-text">
          <span className="logo-small">we</span>
          <span className="logo-big">CARE</span>
        </div>
      </Link>
      {/* <Link to="/about">
        <div className="logo-text">
          <span className="logo-small">we</span>
          <span className="logo-big">CARE</span>
        </div>
      </Link> */}
      <div className="dashboard-header-right">
        <i className="fas bell fa-bell"></i>

        <p className="displayname">{displayName}</p>
        <p>
          <i className="far fa-user-circle"></i>
        </p>
        <p></p>
        <p onClick={handleMenuDisplay}>
          {!showMenu ? (
            <i className="fas fa-bars"></i>
          ) : (
            <i class="fas fa-times"></i>
          )}
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: currentUser,
});

export default connect(mapStateToProps)(DashboardHeader);
// export default DashboardHeader;
