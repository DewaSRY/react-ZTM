import { useSelector } from "react-redux";
import { selectCurrentUser } from "../Store-Reducer/User-contex/User-select";
import { ReactComponent as CrwnLogo } from "../Assets/crown.svg";
import CartIcon from "../Component/Shope/Cart-Icon";
import CartDropDown from "../Component/Shope/Cart-DropDown";
import { Outlet, Link } from "react-router-dom";

import { signOut_User } from "../Utils/Firebase";

import { selectCarOpen } from "../Store-Reducer/Cart/Cart-select";

import "./Navigation.style.scss";

function SignInLink() {
  return (
    <Link className="nav-link" to="autentication">
      SIGN IN
    </Link>
  );
}
function SignOutLink() {
  return (
    <span className="nav-link" onClick={signOut_User}>
      SIGN OUT
    </span>
  );
}

export default function Navigation() {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectCarOpen);
  // const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="">
          <div>
            <CrwnLogo className="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            Shop
          </Link>
          {currentUser ? <SignOutLink /> : <SignInLink />}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
}
