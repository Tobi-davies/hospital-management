import React from "react";
import "./custom-button.styles.scss";
// import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({
  children,
  isGoogleSignIn,
  toSignin,
  ...otherProps
}) => (
  // <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} ${
      toSignin ? "toSignin" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
