import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./signup-page.styles.scss";
import signupBG from "../../assets/images/national-cancer-institute-U7hHC8uCXkY-unsplash2.jpg";
// import { signInWithGoogle } from "../../firebase/firebase.utils";
import { googleSignInStart, signUpStart } from "../../redux/user/user.action";

const SignUp = ({ googleSignInStart, signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      setUserCredentials({
        password: "",
        confirmPassword: "",
      });
      return;
    }

    if (password.length < 6) {
      alert("passwords is too weak, try another password");
      this.setState({
        password: "",
        confirmPassword: "",
      });
      return;
    }
    signUpStart({ email, password, displayName });

    setUserCredentials({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="signup-page">
      <div className="signup-left">
        <div className="signup-left-container">
          <Link to="/">
            <div className="logo-text">
              <span className="logo-small">we</span>
              <span className="logo-big">CARE</span>
            </div>
          </Link>
          <h2>Create an Account</h2>
          <form onSubmit={handleSubmit}>
            <FormInput
              name="displayName"
              type="text"
              value={displayName}
              placeholder="Name"
              handleChange={handleChange}
              required
            />
            <FormInput
              name="email"
              type="email"
              value={email}
              placeholder="Email"
              handleChange={handleChange}
              required
            />

            <FormInput
              name="password"
              type="password"
              value={password}
              placeholder="Password"
              handleChange={handleChange}
              required
            />

            <FormInput
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              placeholder="Confirm Password"
              handleChange={handleChange}
              required
            />

            <div className="buttons">
              <CustomButton type="submit" toSignin>
                SIGN UP
              </CustomButton>
              <div className="or">Or</div>
              <CustomButton
                type="button"
                onClick={googleSignInStart}
                isGoogleSignIn
              >
                Continue with Google
              </CustomButton>
            </div>
          </form>
          <div className="Signup">
            Already have an account?
            <Link to="/signin">
              <span className="login">Login</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="signup-right">
        <img src={signupBG} alt="background" />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
