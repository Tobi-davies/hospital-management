import React, { useState } from "react";
import { Route, withRouter } from "react-router-dom";
import "./user-page.styles.scss";
import DashboardMenu from "../dashboard-menu/dashboard-menu.component";
import DashboardHeader from "../dashboard-header/dashboard-header.component";
import Appointment from "../appointments/appointments.component";
import ProfilePage from "../profile-page/profile-page.component";
import Welcome from "../welcome-page/welcome-page.component";

const UserPage = ({ match }) => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);

  // console.log(match.path);

  return (
    <div className="user-page">
      <div className="dashboard-left">
        <DashboardMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </div>
      <div className="dashboard-rightcolumn">
        <DashboardHeader setShowMenu={setShowMenu} showMenu={showMenu} />
        <Route exact path="/dashboard" component={Welcome} />
        <Route path={`${match.path}/appointment`} component={Appointment} />
        <Route path={`${match.path}/profile`} component={ProfilePage} />
      </div>
    </div>
  );
};

export default withRouter(UserPage);
