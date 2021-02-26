import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./signin-page.styles.scss";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/user/user.action";
import signinBG from "../../assets/images/markus-winkler-AB4P_fPXirY-unsplash.jpg";
import { connect } from "react-redux";

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userInfo;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="signin-page">
      <div className="signin-left">
        <div className="signin-left-container">
          <Link to="/">
            <div className="logo-text">
              <span className="logo-small">we</span>
              <span className="logo-big">CARE</span>
            </div>
          </Link>
          <h2>Welcome Back !</h2>
          <form onSubmit={handleSubmit}>
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

            <div className="buttons">
              <CustomButton type="submit" toSignin>
                SIGN IN
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
          <div className="Signin">
            Don't have an account yet?
            <Link to="/signup">
              <span className="create-account">Create a new account</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="signin-right">
        <img src={signinBG} alt="background" />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
  googleSignInStart: () => dispatch(googleSignInStart()),
});

export default connect(null, mapDispatchToProps)(SignIn);
