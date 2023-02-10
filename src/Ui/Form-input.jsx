//
import "./Form-input.style.scss";
export default function FormInput({ label, ...otherProps }) {
  if (!label) {
    return;
  }
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      <label className={`${otherProps.value.length ? "shrink" : ""}`}>
        {label}
      </label>
    </div>
  );
}
