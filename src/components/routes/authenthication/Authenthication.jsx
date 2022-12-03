import SignIn from "../../Sign-In/SignIn";
import Register from "../../register/Register";
import "../../styles/authenthication/authenthication.styles.scss";
export default function Authenthication() {
  return (
    <div className="authenthication-container">
      <SignIn />
      <Register />
    </div>
  );
}
