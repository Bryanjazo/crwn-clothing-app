import React from "react";
import {
  GoogleSignInButton,
  BaseButton,
  Inverted,
} from "../styles/button/button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: Inverted,
  }[buttonType]);

export default function Button({ children, buttonType, ...otherprops }) {
  const CustomButton = getButton(buttonType);
  return (
    <div>
      <CustomButton {...otherprops}>{children}</CustomButton>
    </div>
  );
}
