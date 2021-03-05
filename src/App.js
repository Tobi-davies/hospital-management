import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Header from "./components/header/header.component";
import Intro from "./components/intro/intro.component";
import Contact from "./components/contact/contact.component";
import About from "./components/about/about.component";
import Services from "./components/offers/services.component";
import SignIn from "./components/signin-page/siginin-page.component";
import SignUp from "./components/signup-page/signup-page.component";
import { currentUser } from "./redux/user/user.selectors";
// import { checkUserSession } from "./redux/user/user.action";
import UserPage from "./components/user-page/user-page.component";
import ScrollToTop from "./components/scrollToTop";
import Footer from "./components/footer/footer.component";
// import { useEffect } from "react";

const App = ({ currentUser, location }) => {
  // useEffect(() => {
  //   checkUserSession();
  // }, [checkUserSession]);
  // console.log(location);

  return (
    <div className="App">
      <ScrollToTop />

      {location.pathname === "/signin" ||
      location.pathname === "/signup" ||
      location.pathname === "/dashboard" ||
      location.pathname === "/dashboard/appointment" ||
      location.pathname === "/dashboard/profile" ||
      location.pathname === "/dashboard/billing" ||
      location.pathname === "/dashboard/notification" ? (
        ""
      ) : (
        <Header />
      )}
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact-us" component={Contact} />
        {/* <Route path="/signup" component={SignUp} /> */}
        {/* <Route path="/signin" component={SignIn} /> */}
        <Route path="/dashboard" component={UserPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/dashboard" /> : <SignIn />
          }
        />
        <Route
          exact
          path="/signup"
          render={() =>
            currentUser ? <Redirect to="/dashboard" /> : <SignUp />
          }
        />

        {/* {currentUser ? (
          <Route path="/profile" component={Profile} />
        ) : (
          <div>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </div>
        )} */}
      </Switch>
      <Footer />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: currentUser,
});

// const mapDispatchToProps = (dispatch) => ({
//   checkUserSession: () => dispatch(checkUserSession()),
// });

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
export default withRouter(connect(mapStateToProps)(App));
