import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./signin-page.styles.scss";

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userInfo;

  const handleSubmit = async (event) => {
    event.preventDefault();

    // emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="signin-page">
      <h2>Welcome Back!</h2>
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
          <CustomButton type="button" isGoogleSignIn>
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
  );
};

export default SignIn;
