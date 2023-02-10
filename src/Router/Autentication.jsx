import SingUpForm from "../Component/Autentication/sign-up.component";
import SingINForm from "../Component/Autentication/sign-in.component";
import "./Autentication.style.scss";

export default function Autentication() {
  return (
    <div className="authentication-container">
      <SingINForm />
      <SingUpForm />
    </div>
  );
}
