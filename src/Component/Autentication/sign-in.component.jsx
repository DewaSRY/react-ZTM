//
import Button from "../../Ui/Button-ui";
import FormInput from "../../Ui/Form-input";
import {
  signIn_WithAuthEmailAndPassword,
  signIn_WithGooglePopup,
  create_UserDocumentFromAuth,
} from "../../Utils/Firebase";
import { useState } from "react";
import "./sign-form.style.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

export default function SingINForm() {
  const [formField, setFormField] = useState(defaultFormFields);
  const { email, password } = formField;
  const heandelChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  async function LogGoogleUser() {
    const { user } = await signIn_WithGooglePopup();
    await create_UserDocumentFromAuth(user);
  }
  async function submitHeandler(event) {
    event.preventDefault();
    try {
      await signIn_WithAuthEmailAndPassword(email, password);
      setFormField(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          return alert("incorrect password");
        case "auth/user-not-found":
          return alert("Email not found ");
        default:
          console.log("some things was wrong", error);
      }
    }
  }
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
