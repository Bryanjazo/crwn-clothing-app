import React from "react";
import { signInWithGooglePopup } from "../../../utils/firebase/firebase.utils";
export default function Signin() {
  const loginUser = async () => {
    const resp = await signInWithGooglePopup();
    console.log(resp, "------resp-----");
  };
  return (
    <div>
      <div>
        <button onClick={loginUser}>Sign in with google pop up</button>
      </div>
    </div>
  );
}
