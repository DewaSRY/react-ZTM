import "./Button.style.scss";
import Spiner from "../Component/Spinner/Spiner";
export const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

export default function Button({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      disabled={isLoading}
      {...otherProps}
    >
      {isLoading ? (
        <Spiner style={{ width: "30px", height: "30px" }} />
      ) : (
        `${children}`
      )}
    </button>
  );
}
