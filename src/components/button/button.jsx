import React from "react";
import "../styles/button/button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};
export default function Button({ children, buttonType, ...otherprops }) {
  return (
    <div>
      <button
        className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
        {...otherprops}
      >
        {children}
      </button>
    </div>
  );
}
