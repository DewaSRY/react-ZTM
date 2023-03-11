//
import Button from "../../Ui/Button-ui";
import FormInput from "../../Ui/Form-input";

import { useDispatch } from "react-redux";
import { useState } from "react";
import { signUpStart } from "../../Store-Reducer/User-contex/User-actton";
import "./sign-form.style.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SingUpForm() {
  const [formField, setFormField] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formField;
  const dispatch = useDispatch();

  const heandelChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  async function submitHeandler(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("your password does not match");
    }
    try {
      dispatch(signUpStart(email, password, displayName));
      setFormField(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email already in use");
      } else {
        alert("something was wrong", error);
      }
    }
  }

  return (
    <div className="form-container">
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form action="" onSubmit={submitHeandler}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={heandelChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          type="email"
          required
          onChange={heandelChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={heandelChange}
          name="password"
          value={password}
          autoComplete="on"
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={heandelChange}
          name="confirmPassword"
          value={confirmPassword}
          autoComplete="on"
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
