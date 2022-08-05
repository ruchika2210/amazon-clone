import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      console.log(user.email, "-----email");

      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img src="https://pure-vodka.co.uk/wp-content/uploads/2020/05/amazon_PNG25.png" />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={(!user, "/login")}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">Hello</span>
            <span className="header_optionLineTwo">
              {user ? "Sign out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your </span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header_OptionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionLineTwo header_basketCount">
            {basket.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
