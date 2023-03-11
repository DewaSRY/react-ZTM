//
import Button from "../../Ui/Button-ui";
import FormInput from "../../Ui/Form-input";
import { useDispatch } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../Store-Reducer/User-contex/User-actton";
import { useState } from "react";
import "./sign-form.style.scss";

const defaultFormFields = {
  email: "",
  password: "",
};
export default function SingINForm() {
  const dispatch = useDispatch();
  const [formField, setFormField] = useState(defaultFormFields);
  const { email, password } = formField;

  async function LogGoogleUser() {
    dispatch(googleSignInStart());
  }
  async function submitHeandler(event) {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
      setFormField(defaultFormFields);
    } catch (error) {
      console.log("some things was wrong", error);
    }
  }
  const heandelChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  return (
    <div className="form-container ">
      <h2>Log In Here</h2>
      <span>Sign up with your email and password</span>
      <form action="" onSubmit={submitHeandler}>
        <FormInput
          label={"Email"}
          type={"email"}
          onChange={heandelChange}
          name="email"
          value={email}
          required
        />
        <FormInput
          label={"Password"}
          type="password"
          onChange={heandelChange}
          name="password"
          value={password}
          required
        />
        <div className="buttons-container">
          <Button type="submit">SIGN IN </Button>
          <Button type="button" buttonType={"google"} onClick={LogGoogleUser}>
            Sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
}
