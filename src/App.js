import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import Intro from "./components/intro/intro.component";
import Contact from "./components/contact/contact.component";
import About from "./components/about/about.component";
import Services from "./components/offers/services.component";
import SignIn from "./components/signin-page/siginin-page.component";
import SignUp from "./components/signup-page/signup-page.component";

function App() {
  return (
    <div className="App">
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Header />

      {/* <Switch> */}

      <Route exact path="/" component={Intro} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/contact-us" component={Contact} />

      {/* </Switch> */}
    </div>
  );
}

export default App;
