import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./signup-page.styles.scss";
import signupBG from "../../assets/images/national-cancer-institute-U7hHC8uCXkY-unsplash2.jpg";
import { signInWithGoogle } from "../../firebase/firebase.utils";

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    // emailSignInStart(email, password);
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
              name="name"
              type="text"
              value={name}
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
              name="confirm Password"
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
                onClick={signInWithGoogle}
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

export default SignUp;
